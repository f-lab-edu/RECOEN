import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';
import ArticleModel from 'pages/api/models/articleModel';
import { ArticleElementsType } from 'src/types/article';
import Image from 'src/components/ui/Image';
import { getPlaiceholder } from 'plaiceholder';
import MDXDetail from 'src/components/mdx/MDXDetail';
import { serialize } from 'next-mdx-remote/serialize';

interface IPrams extends ParsedUrlQuery {
  id: string;
}

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Image
        fullWidth
        height={400}
        src={article.imgUrl}
        alt="Hero Image"
        blurDataURL={article.blurDataURL}
      />
      <MDXDetail
        title={article.title}
        content={article.content}
        time="2022.10.23 · 7min read"
      />
    </>
  );
};

export default Article;

export const getStaticPaths = async () => {
  try {
    console.log('CONNECTING TO MONGO IN DETAIL PATH');
    await connectMongo();
    console.log('CONNECTED TO MONGO IN DETAIL PATH');

    console.log('FETCHING DATA');
    const res = await ArticleModel.find();
    console.log('FETCHED DATA');

    const articles = JSON.parse(JSON.stringify(res));

    // NOTE : any 수정할 것
    const paths = articles.map((article: ArticleElementsType) => {
      return { params: { id: article._id.toString() } };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  try {
    console.log('CONNECTING TO MONGO IN DETAIL PROPS');
    await connectMongo();
    console.log('CONNECTED TO MONGO IN DETAIL PROPS');

    const { id } = context.params as IPrams;

    const res = await ArticleModel.findById(id);
    const article = JSON.parse(JSON.stringify(res));

    const { base64 } = await getPlaiceholder(article.imgUrl);
    const content = await serialize(article.content);

    const assembledArticle = { ...article, blurDataURL: base64, content };

    return {
      props: {
        article: assembledArticle,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

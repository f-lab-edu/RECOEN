import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';
import { getPlaiceholder } from 'plaiceholder';
import { serialize } from 'next-mdx-remote/serialize';

import ArticleModel from 'pages/api/models/articleModel';
import MDXDetail from 'src/components/mdx/MDXDetail';
import Head from 'src/components/Head';
import Image from 'next/image';

import { ArticleElementsType } from 'src/types/article';
interface IPrams extends ParsedUrlQuery {
  id: string;
}

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head article={article} />
      <Image
        src={article.imgUrl}
        sizes="100vw"
        alt="Hero Image"
        blurDataURL={article.blurDataURL}
        fill
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

import React, { useEffect } from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';
import { getPlaiceholder } from 'plaiceholder';
import { serialize } from 'next-mdx-remote/serialize';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { detailPageState } from 'src/recoil/article';

import ProgrammingArticleModel from 'pages/api/models/programmingArticleModel';
import MDXDetail from 'src/components/mdx/MDXDetail';
import Head from 'src/components/Head';
import Image from 'next/image';

import { ViewArticleElement } from 'src/types/article';

import { useRouter } from 'next/router';

interface IPrams extends ParsedUrlQuery {
  id: string;
}

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setDetailStates = useSetRecoilState(detailPageState);
  const resetDetailStates = useResetRecoilState(detailPageState);
  const router = useRouter();

  useEffect(() => {
    const detailStates = {
      _id: article._id,
      title: article.title,
      content: article.content,
      imgUrl: article.imgUrl,
      description: article.description,
      tags: article.tags,
      createdAt: article.createdAt,
    };
    setDetailStates(detailStates);
  }, []);

  useEffect(() => {
    return () => {
      router.beforePopState(() => {
        resetDetailStates();
        return true;
      });
    };
  }, []);

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
      <MDXDetail content={article.MDXcontent} />
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
    const res = await ProgrammingArticleModel.find();
    console.log('FETCHED DATA');

    const articles = JSON.parse(JSON.stringify(res));

    const paths = articles.map((article: ViewArticleElement) => {
      if (article._id) return { params: { id: article._id.toString() } };
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

    const res = await ProgrammingArticleModel.findById(id);
    const article = JSON.parse(JSON.stringify(res));

    const { base64 } = await getPlaiceholder(article.imgUrl);
    const MDXcontent = await serialize(article.content);

    const assembledArticle = { ...article, blurDataURL: base64, MDXcontent };

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

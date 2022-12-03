import React, { useEffect } from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

import ProgrammingArticleModel from 'pages/api/models/programmingArticleModel';
import DBUtils from 'src/utils/dbUtils';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { detailPageState } from 'src/recoil/article';
import { ViewArticleElement } from 'src/types/article';

import MDXDetail from 'src/components/mdx/MDXDetail';
import Head from 'src/components/Head';
import Image from 'next/image';

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
    const detailStates: ViewArticleElement = {
      _id: article._id,
      title: article.title,
      content: article.content,
      imgUrl: article.imgUrl,
      description: article.description,
      tags: article.tags,
      createdAt: article.createdAt,
      blurDataURL: article.blurDataURL,
      category: article.category,
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
    const programmingDB = await new DBUtils(ProgrammingArticleModel);
    await programmingDB.setUp();
    const paths = await programmingDB.findArticlePaths();

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
    const { id } = context.params as IPrams;

    const programmingDB = await new DBUtils(ProgrammingArticleModel);
    await programmingDB.setUp();
    const article = await programmingDB.getMDXContent(id);

    return {
      props: {
        article,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

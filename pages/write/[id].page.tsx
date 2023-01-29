import React, { useEffect } from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { articleState } from 'src/recoil/article';

import ArticleCollectionModel from 'pages/api/models/articleCollectionModel';
import WritePageContainer from 'src/components/container/WritePageContainer';

import { writeStates } from 'src/recoil/article';
import { useRouter } from 'next/router';

const UpdatePage = ({
  article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setArticle = useSetRecoilState(articleState);
  const setWriteState = useSetRecoilState(writeStates);
  const resetDetailStates = useResetRecoilState(articleState);
  const { query } = useRouter();

  useEffect(() => {
    const articleState = {
      _id: article._id,
      title: article.title,
      content: article.content,
      imgUrl: article.imgUrl,
      description: article.description,
      tags: article.tags,
      category: article.category,
    };
    setArticle(articleState);

    if (query.type !== 'update') return;
    setWriteState(query.type);

    return () => resetDetailStates();
  }, []);

  return <WritePageContainer />;
};

export default UpdatePage;

interface IPrams extends ParsedUrlQuery {
  id: string;
}

const fetchArticle = async (context: GetServerSidePropsContext) => {
  await connectMongo();
  const { id } = context.query as IPrams;

  const res = await ArticleCollectionModel.findById(id);
  const article = JSON.parse(JSON.stringify(res));
  return { props: { article } };
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  return fetchArticle(context);
};

import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

import ArticleCollectionModel from 'pages/api/models/articleCollectionModel';
import WritePageContainer from 'src/components/container/WritePageContainer';

import { useSettingUpdatePage } from 'src/hooks';

const UpdatePage = ({
  article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useSettingUpdatePage(article);

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

import React, { useEffect } from 'react';
import WritePage from './index.page';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { articleStates } from 'src/recoil/article';

import ArticleModel from 'pages/api/models/articleModel';

const UpdatePage = ({
  article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setArticle = useSetRecoilState(articleStates);
  const resetDetailStates = useResetRecoilState(articleStates);

  useEffect(() => {
    const articleState = {
      _id: article._id,
      title: article.title,
      content: article.content,
      imgUrl: article.imgUrl,
      description: article.description,
      tags: article.tags,
    };
    setArticle(articleState);

    return () => resetDetailStates();
  }, []);

  return <WritePage />;
};

export default UpdatePage;

interface IPrams extends ParsedUrlQuery {
  id: string;
}
export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  await connectMongo();
  const { id } = context.params as IPrams;
  const res = await ArticleModel.findById(id);
  const article = JSON.parse(JSON.stringify(res));

  return { props: { article } };
};

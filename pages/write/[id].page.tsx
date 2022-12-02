import React, { useEffect } from 'react';
import WritePage from './index.page';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { articleState } from 'src/recoil/article';

import ProgrammingArticleModel from 'pages/api/models/programmingArticleModel';

const UpdatePage = ({
  article,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setArticle = useSetRecoilState(articleState);
  const resetDetailStates = useResetRecoilState(articleState);

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
  const res = await ProgrammingArticleModel.findById(id);
  const article = JSON.parse(JSON.stringify(res));

  return { props: { article } };
};

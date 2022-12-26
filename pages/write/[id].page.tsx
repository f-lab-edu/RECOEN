import React, { useEffect } from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { articleState } from 'src/recoil/article';
import { ArticleCategory } from 'src/types/article';

import ProgrammingArticleModel from 'pages/api/models/programmingArticleModel';
import BookArticleModel from 'pages/api/models/bookArticleModel';

import WriteContainer from 'src/components/WriteContainer';

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
      category: article.category,
    };
    setArticle(articleState);

    return () => resetDetailStates();
  }, []);

  return <WriteContainer />;
};

export default UpdatePage;

interface IPrams extends ParsedUrlQuery {
  id: string;
}
export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  await connectMongo();
  const { id, category } = context.query as IPrams;
  const modelCategory = category as ArticleCategory;

  const ModelMap = {
    programming: ProgrammingArticleModel,
    book: BookArticleModel,
  };

  const res = await ModelMap[modelCategory].findById(id);
  const article = JSON.parse(JSON.stringify(res));

  return { props: { article } };
};

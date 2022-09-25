import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'pages/api/middlewares/connectMongo';
import ArticleModel from 'pages/api/models/articleModel';
import { client } from 'src/utils';

interface IPrams extends ParsedUrlQuery {
  id: string;
}

const Article = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div>{article.title}</div>
      <div>{article.description}</div>
      <div>{article.content}</div>
    </>
  );
};

export default Article;

export const getStaticPaths = async () => {
  try {
    console.log('CONNECTING TO MONGO IN DETAIL');
    await connectMongo();
    console.log('CONNECTED TO MONGO IN DETAIL');

    console.log('FETCHING DATA');
    const res = await ArticleModel.find();
    console.log('FETCHED DATA');
    const articles = JSON.parse(JSON.stringify(res));

    // NOTE : any 수정할 것
    const paths = articles.map((article: any) => {
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
    const { id } = context.params as IPrams;
    const res = await client.get('/api/article', { data: id });

    return {
      props: {
        article: JSON.parse(JSON.stringify(res.data)),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

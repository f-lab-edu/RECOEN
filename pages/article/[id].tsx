import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { connectMongo } from 'src/utils/connectMongo';
import ArticleModel from 'src/models/articleModel';

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
    await connectMongo();

    const articles = await ArticleModel.find();
    const paths = articles.map((article) => {
      return { params: { id: article._id.toString() } };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  try {
    const { id } = context.params as IPrams;
    const res = await ArticleModel.findById(id);

    return {
      props: {
        article: JSON.parse(JSON.stringify(res)),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

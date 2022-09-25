import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getArticle, getArticles } from 'src/utils';

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
    const { data } = await getArticles();

    // NOTE : any 수정할 것
    const paths = data.map((article: any) => {
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
    const res = await getArticle(id);

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

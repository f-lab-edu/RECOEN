import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import BookArticleModel from 'pages/api/models/bookArticleModel';
import DBUtils from 'src/utils/dbUtils';

import Hero from 'src/components/hero/Hero/Hero';
import ArticleList from 'src/components/article/ArticleList';

const BookPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero text="Book" listLength={articles.length} />
      <ArticleList articles={articles} type="book" />
    </>
  );
};

export default BookPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const programmingDB = await new DBUtils(BookArticleModel);
    await programmingDB.setUp();
    const articlesWithBlurURL = await programmingDB.findArticleWithBluredURL();

    return {
      props: {
        articles: articlesWithBlurURL,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

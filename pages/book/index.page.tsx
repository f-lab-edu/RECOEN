import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import BookArticleModel from 'pages/api/models/bookArticleModel';
import DBUtils from 'src/utils/dbUtils';
import { getTags } from 'src/utils/getTags';

import Hero from 'src/components/hero/Hero/Hero';
import ArticleList from 'src/components/article/ArticleList';
import UpperLayout from 'src/components/hero/UpperLayout';
import TagSearch from 'src/components/ui/TagSearch/TagSearch';

import { useSetRecoilState } from 'recoil';
import { articleListStates } from 'src/recoil/article';

const BookPage = ({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setArticleList = useSetRecoilState(articleListStates);
  setArticleList(articles);

  return (
    <>
      <UpperLayout
        hero={<Hero text="Book" listLength={articles.length} />}
        tagSearch={<TagSearch tags={tags} />}
      />
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
    const tags = getTags(articlesWithBlurURL);

    return {
      props: {
        articles: articlesWithBlurURL,
        tags,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

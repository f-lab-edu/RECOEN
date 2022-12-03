import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ProgrammingArticleModel from 'pages/api/models/programmingArticleModel';

import Hero from 'src/components/hero/Hero/Hero';
import ArticleList from 'src/components/article/ArticleList';
import UpperLayout from 'src/components/hero/UpperLayout';
import TagSearch from 'src/components/ui/TagSearch/TagSearch';

import DBUtils from 'src/utils/dbUtils';

const ArticlePage = ({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setArticleList = useSetRecoilState(articleListStates);
  setArticleList(articles);

  return (
    <>
      <UpperLayout
        hero={<Hero text="Article" listLength={articles.length} />}
        tagSearch={<TagSearch tags={tags} />}
      />
      <ArticleList articles={articles} />
    </>
  );
};

export default ArticlePage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const programmingDB = await new DBUtils(ProgrammingArticleModel);
    await programmingDB.setUp();
    const articlesWithBlurURL = await programmingDB.findArticleWithBluredURL();

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

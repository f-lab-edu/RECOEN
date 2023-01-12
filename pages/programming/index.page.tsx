import React, { useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ProgrammingArticleModel from 'pages/api/models/programmingArticleModel';
import DBUtils from 'src/utils/dbUtils';

import Hero from 'src/components/hero/Hero/Hero';
import ArticleList from 'src/components/article/ArticleList';
import UpperLayout from 'src/components/hero/UpperLayout';
import TagSearch from 'src/components/ui/TagSearch/TagSearch';

import { useSetRecoilState } from 'recoil';
import { articleListStates } from 'src/recoil/article';
import { getTags } from 'src/utils/getTags';

const ProgrammingPage = ({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setArticleList = useSetRecoilState(articleListStates);

  useEffect(() => {
    setArticleList(articles);
  }, []);

  return (
    <>
      <UpperLayout
        hero={<Hero text="Programming" listLength={articles.length} />}
        tagSearch={<TagSearch tags={tags} />}
      />
      <ArticleList articles={articles} category="programming" />
    </>
  );
};

export default ProgrammingPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const programmingDB = await new DBUtils(ProgrammingArticleModel);
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

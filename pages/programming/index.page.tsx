import React, { useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import ArticleCollection from 'pages/api/models/articleCollectionModel';
import DBUtils from 'src/utils/dbUtils';

import Article from 'src/components/article/Article/Article';
import ListPageContainer from 'src/components/container/ListPageContainer';

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
    <ListPageContainer>
      <ListPageContainer.UpperLayout>
        <ListPageContainer.UpperLayout.Hero
          text="Programming"
          listLength={articles.length}
        />
        <ListPageContainer.UpperLayout.TagSearch tags={tags} />
      </ListPageContainer.UpperLayout>
      <ListPageContainer.Hr />
      <ListPageContainer.ArticleList
        articles={articles}
        renderListItem={(article) => (
          <Article article={article} key={article._id} />
        )}
      />
    </ListPageContainer>
  );
};

export default ProgrammingPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articleDB = await new DBUtils(ArticleCollection);
    await articleDB.setUp();
    const articlesWithBlurURL = await articleDB.findArticleWithBluredURL(
      'programming',
    );
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

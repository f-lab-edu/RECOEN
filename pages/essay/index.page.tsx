import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import ArticleCollection from 'pages/api/models/articleCollectionModel';
import DBUtils from 'src/utils/dbUtils';
import { getTags } from 'src/utils/getTags';

import Essay from 'src/components/essay/Essay';
import ListPageContainer from 'src/components/container/ListPageContainer';

import { useSettingListPage } from 'src/hooks';

const EssayPage = ({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useSettingListPage(articles);

  return (
    <ListPageContainer>
      <ListPageContainer.UpperLayout>
        <ListPageContainer.UpperLayout.Hero
          text="Essay"
          listLength={articles.length}
        />
        <ListPageContainer.UpperLayout.TagSearch tags={tags} />
      </ListPageContainer.UpperLayout>
      <ListPageContainer.Hr />
      <ListPageContainer.ArticleList
        articles={articles}
        renderListItem={(article) => (
          <Essay article={article} key={article._id} />
        )}
      />
    </ListPageContainer>
  );
};

export default EssayPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articleDB = await new DBUtils(ArticleCollection);
    await articleDB.setUp();
    const articlesWithBlurURL = await articleDB.findArticleWithBluredURL(
      'essay',
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

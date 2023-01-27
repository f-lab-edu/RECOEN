import React, { useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import ArticleCollection from 'pages/api/models/articleCollectionModel';
import DBUtils from 'src/utils/dbUtils';
import { getTags } from 'src/utils/getTags';

import Essay from 'src/components/essay/Essay';
import ListContainer from 'src/components/container/ListContainer';

import { useSetRecoilState } from 'recoil';
import { articleListStates } from 'src/recoil/article';

const EssayPage = ({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setArticleList = useSetRecoilState(articleListStates);
  useEffect(() => {
    setArticleList(articles);
  }, []);

  return (
    <ListContainer>
      <ListContainer.UpperLayout>
        <ListContainer.UpperLayout.Hero
          text="Essay"
          listLength={articles.length}
        />
        <ListContainer.UpperLayout.TagSearch tags={tags} />
      </ListContainer.UpperLayout>
      <ListContainer.Hr />
      <ListContainer.ArticleList
        articles={articles}
        renderListItem={(article) => <Essay article={article} />}
      />
    </ListContainer>
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

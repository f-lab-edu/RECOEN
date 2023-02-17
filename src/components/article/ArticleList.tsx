import React from 'react';
import Grid from 'src/components/ui/Grid';

import { ViewArticleElement } from 'src/types/article';
import { useRecoilValue } from 'recoil';
import { filteredArticleStates } from 'src/recoil/article';
import { getCategory } from 'src/utils';

interface Props {
  articles: ViewArticleElement[];
  renderListItem: (article: ViewArticleElement, index: number) => JSX.Element;
}

const ArticleList = ({ articles, renderListItem }: Props) => {
  const filteredArticles = useRecoilValue(filteredArticleStates);

  return (
    <Grid category={getCategory(articles)}>
      <>
        {(filteredArticles.length ? filteredArticles : articles).map(
          (article: ViewArticleElement, index) =>
            renderListItem(article, index),
        )}
      </>
    </Grid>
  );
};

export default ArticleList;

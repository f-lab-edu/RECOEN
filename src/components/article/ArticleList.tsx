import React from 'react';
import Grid from 'src/components/ui/Grid';

import { ViewArticleElement } from 'src/types/article';
import { useRecoilValue } from 'recoil';
import { filteredArticleStates } from 'src/recoil/article';

interface Props {
  articles: ViewArticleElement[];
  renderListItem: (article: ViewArticleElement) => JSX.Element;
}

const ArticleList = ({ articles, renderListItem }: Props) => {
  const filteredArticles = useRecoilValue(filteredArticleStates);
  return (
    <Grid>
      <>
        {(filteredArticles.length ? filteredArticles : articles).map(
          (article: ViewArticleElement) => renderListItem(article),
        )}
      </>
    </Grid>
  );
};

export default ArticleList;

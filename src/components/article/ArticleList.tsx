import React from 'react';

import Article from './Article/Article';
import Grid from 'src/components/ui/Grid';

import { ArticleElementsType } from 'src/types/article';
import { useRecoilValue } from 'recoil';
import { filteredArticleStates } from 'src/recoil/article';

interface Props {
  articles: ViewArticleElement[];
}

const ArticleList = ({ articles }: Props) => {
  const filteredArticles = useRecoilValue(filteredArticleStates);
  return (
    <Grid>
      <>
        {(filteredArticles.length ? filteredArticles : articles).map(
          (article: ArticleElementsType) => {
            if (!article._id) return;
            return (
              <Article
                key={article._id}
                path={encodeURI(article._id)}
                title={article.title}
                imgUrl={article.imgUrl}
                description={article.description}
                blurDataURL={article.blurDataURL}
              />
            );
          },
        )}
      </>
    </Grid>
  );
};

export default ArticleList;

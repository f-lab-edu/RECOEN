import React from 'react';
import { Grid } from 'src/components';
import { Article } from './Article';
import { ArticleElementsType } from 'src/types/article';

interface Props {
  articles: ArticleElementsType[];
}

export const ArticleList = ({ articles }: Props) => {
  return (
    <Grid>
      <>
        {articles.map((article: ArticleElementsType) => (
          <Article
            key={article._id}
            path={encodeURI(article._id)}
            title={article.title}
            imgUrl={article.imgUrl}
            description={article.description}
            blurDataURL={article.blurDataURL}
          />
        ))}
      </>
    </Grid>
  );
};

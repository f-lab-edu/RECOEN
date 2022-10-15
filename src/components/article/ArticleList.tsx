import React from 'react';
import { Grid } from 'src/components';
import { Article } from './Article';
import { ArticleT } from '../../../pages/article/index.page';

interface Props {
  articles: ArticleT[];
}

export const ArticleList = ({ articles }: Props) => {
  return (
    <Grid>
      <>
        {articles.map((article: ArticleT) => (
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

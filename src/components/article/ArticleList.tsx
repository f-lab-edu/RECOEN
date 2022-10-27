import React from 'react';

import Article from './Article';
import Grid from 'src/components/ui/Grid';

import { ArticleElementsType } from 'src/types/article';
interface Props {
  articles: ArticleElementsType[];
}

const ArticleList = ({ articles }: Props) => {
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

export default ArticleList;

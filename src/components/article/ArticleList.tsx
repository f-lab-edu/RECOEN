import React from 'react';

import Article from './Article/Article';
import Grid from 'src/components/ui/Grid';

import { ViewArticleElement } from 'src/types/article';
interface Props {
  articles: ViewArticleElement[];
}

const ArticleList = ({ articles }: Props) => {
  return (
    <Grid>
      <>
        {articles.map((article: ViewArticleElement) => {
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
        })}
      </>
    </Grid>
  );
};

export default ArticleList;

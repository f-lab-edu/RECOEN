import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { connectMongo } from 'pages/api/middlewares/connectMongo';
import ArticleModel from 'pages/api/models/articleModel';

import { Article, SideTab, Layout, Grid } from 'src/components';

const ArticlePage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <>
        <SideTab />
        <Grid>
          <>
            {articles.map((article: any) => (
              <Article
                key={article._id}
                path={encodeURI(article._id)}
                title={article.title}
                imgUrl={article.imgUrl}
                description={article.description}
              />
            ))}
          </>
        </Grid>
      </>
    </Layout>
  );
};

export default ArticlePage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    console.log('CONNECTING TO MONGO IN ARTICLE PAGE');
    await connectMongo();
    console.log('CONNECTED TO MONGO IN ARTICLE PAGE');

    console.log('FETCHING DATA IN ARTICLE PAGE');
    const res = await ArticleModel.find();
    console.log('FETCHED DATA IN ARTICLE PAGE');

    const articles = JSON.parse(JSON.stringify(res));

    return {
      props: {
        articles: JSON.parse(JSON.stringify(articles)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

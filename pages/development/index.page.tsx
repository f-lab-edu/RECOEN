import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { connectMongo } from 'src/middlewares/connectMongo';
import { Article } from 'src/components/molecules';
import ArticleModel from 'src/models/articleModel';

import { Layout, Grid } from 'src/components/atoms';
const DevelopmentPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Grid>
        <>
          {articles.map((article: any) => (
            <Article
              key={article._id}
              path={encodeURI(article._id)}
              title={article.title}
              description={article.description}
            />
          ))}
        </>
      </Grid>
    </Layout>
  );
};

export default DevelopmentPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    console.log('CONNECTING TO MONGO IN MAIN');
    await connectMongo();
    console.log('CONNECTED TO MONGO IN MAIN');

    console.log('FETCHING DATA');
    const articles = await ArticleModel.find();
    console.log('FETCHED DATA');

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

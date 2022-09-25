import React from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Article, SideTab } from 'src/components/molecules';
import { getArticles } from 'src/utils';

import { Layout, Grid } from 'src/components/atoms';
const DevelopmentPage = ({
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
                description={article.description}
              />
            ))}
          </>
        </Grid>
      </>
    </Layout>
  );
};

export default DevelopmentPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await getArticles();

    return {
      props: {
        articles: JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

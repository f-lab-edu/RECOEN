import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

import ArticleCollection from 'pages/api/models/articleCollectionModel';
import DBUtils from 'src/utils/dbUtils';

import { MDXRemote } from 'next-mdx-remote';
import { useSettingDetailPage } from 'src/hooks';

import MDXTag from 'src/components/article/article-detail/MDXTag';
import ArticleDetail from 'src/components/article/article-detail/ArticleDetail';
import ArticleDetailTitle from 'src/components/article/article-detail/ArticleDetailTitle/ArticleDetailTitle';
import Head from 'src/components/Head';
import Image from 'next/image';

interface IPrams extends ParsedUrlQuery {
  id: string;
}

const EssayDetailPage = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useSettingDetailPage(article);

  return (
    <>
      <Head article={article} />
      <ArticleDetail
        mdxTitle={<ArticleDetailTitle article={article} />}
        image={
          <Image
            src={article.imgUrl}
            alt="Hero Image"
            blurDataURL={article.blurDataURL}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top top' }}
          />
        }
        mdxRemote={<MDXRemote {...article.MDXcontent} components={MDXTag} />}
      />
    </>
  );
};

export default EssayDetailPage;

export const getStaticPaths = async () => {
  try {
    const articleDB = await new DBUtils(ArticleCollection);
    await articleDB.setUp();
    const paths = await articleDB.findArticlePaths('essay');

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  try {
    const { id } = context.params as IPrams;

    const programmingDB = await new DBUtils(ArticleCollection);
    await programmingDB.setUp();
    const article = await programmingDB.getMDXContent(id);

    return {
      props: {
        article,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

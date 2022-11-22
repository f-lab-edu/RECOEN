import React, { useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { connectMongo } from 'pages/api/middlewares/connectMongo';
import ArticleModel from 'pages/api/models/articleModel';

import { getPlaiceholder } from 'plaiceholder';
import { ViewArticleElement } from 'src/types/article';

import Hero from 'src/components/hero/Hero/Hero';
import ArticleList from 'src/components/article/ArticleList';
import UpperLayout from 'src/components/hero/UpperLayout';
import TagSearch from 'src/components/ui/TagSearch/TagSearch';

import { getTags } from 'src/utils';
import { useSetRecoilState } from 'recoil';
import { articleListStates } from 'src/recoil/article';

const ArticlePage = ({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setArticleList = useSetRecoilState(articleListStates);

  useEffect(() => {
    setArticleList(articles);
  }, []);

  return (
    <>
      <UpperLayout
        hero={<Hero text="Article" listLength={articles.length} />}
        tagSearch={<TagSearch tags={tags} />}
      />
      <ArticleList articles={articles} />
    </>
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
    const tags = getTags(articles);

    const articlesWithBlurURL = await Promise.all(
      articles.map(async (article: ViewArticleElement) => {
        const { base64 } = await getPlaiceholder(article.imgUrl);
        return { ...article, blurDataURL: base64 };
      }),
    );
    return {
      props: {
        articles: articlesWithBlurURL,
        tags,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

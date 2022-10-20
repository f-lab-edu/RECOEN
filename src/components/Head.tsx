import React, { useState, useEffect } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { ArticleElementsType } from 'src/types/article';

interface Props {
  article: ArticleElementsType;
}

const Head: React.FC<Props> = ({ article }) => {
  const router = useRouter();

  return (
    <NextHead>
      <title>{article.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content={article.description} name="description" />
      <meta
        property="og:url"
        content={`https://recoen.vercel.com${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="recoen." />
      <meta property="og:title" content={article.title} />
      <meta property="og:image" content={image} />
    </NextHead>
  );
};

export default Head;

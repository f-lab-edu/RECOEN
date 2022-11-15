import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { ArticleElementsType } from 'src/types/article';

import Script from 'next/script';
import * as gtag from 'src/lib/gtag';

interface Props {
  article?: ArticleElementsType;
}

const Head: React.FC<Props> = ({ article }) => {
  const router = useRouter();

  const meta = {
    title: 'recoen - read, code and enrich',
    description: `다른 사람의 삶과 나의 삶을 부유하게 하고 싶은,
    책읽는 개발자의 블로그`,
    image:
      'https://recoen.s3.ap-northeast-2.amazonaws.com/next-s3-uploads/recoen.png',
    type: 'website',
  };

  return (
    <>
      <NextHead>
        <title>{article?.title || meta.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          content={article?.description || meta.description}
          name="description"
        />
        <meta
          property="og:url"
          content={`https://recoen.vercel.com${router.asPath}`}
        />
        <meta property="og:site_name" content="recoen." />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={article?.title} />
        <meta property="og:image" content={article?.imgUrl} />
        <meta
          name="google-site-verification"
          content="orYhBuIgm1ECBqAfSSGkNahD7NVVmpzAG84MKVYVIUQ"
        />
      </NextHead>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
        }}
      />
    </>
  );
};

export default Head;

import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { globalStyles } from 'src/shared';
import NavBar from 'src/components/navigation/NavBar/NavBar';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import Head from 'src/components/Head';
import Script from 'next/script';
import * as gtag from 'src/lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', ${gtag.GA_MEASUREMENT_ID}, {
                    page_path: window.location.pathname,
                  });
                `,
        }}
      ></Script>
      <RecoilRoot>
        <Head />
        <Global styles={globalStyles} />
        <NavBar />
        <Container location={router.pathname}>
          <Component {...pageProps} />
        </Container>
        <div id="modal_root"></div>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

interface StyleProps {
  location: string;
}

const Container = styled.div<StyleProps>`
  padding-top: 90px;
  ${(props) => {
    if (props.location == '/write') return 'padding: 30px 50px 0px 50px';
    if (props.location == '/article/[id]') return 'padding: 0px';
  }};
  height: calc(100vh - 90px);
  box-sizing: border-box;
  position: relative;
`;

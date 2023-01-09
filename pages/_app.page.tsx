import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

import { Global } from '@emotion/react';
import { globalStyles } from 'src/style';
import styled from '@emotion/styled';

import { RecoilRoot } from 'recoil';

import * as gtag from 'src/lib/gtag';

import NavBar from 'src/components/navigation/NavBar/NavBar';
import Head from 'src/components/Head';
import Modal from 'src/components/modals/Modal';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isModal = router.query.isModal;

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
      <Head />
      <SessionProvider session={session}>
        <RecoilRoot>
          <Global styles={globalStyles} />
          <NavBar />
          <Container location={router.pathname} isModal={!!isModal}>
            <Component {...pageProps} />
          </Container>
          <Modal />
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}

export default MyApp;

interface StyleProps {
  location: string;
  isModal: boolean;
}

const writePageStyle = 'padding-top: 30px; width : 1200px';

const Container = styled.div<StyleProps>`
  padding-top: 70px;
  margin: 0 auto;
  ${(props) => {
    if (props.location.includes('/write')) return writePageStyle;
    if (props.location == '/article/[id]') return 'padding: 0px';
  }};
  height: calc(100vh - 70px);
  box-sizing: border-box;
  position: relative;
  ${({ isModal }) => isModal && `overflow: hidden;`}

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

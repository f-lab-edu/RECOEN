import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { globalStyles } from 'src/shared';
import { HeaderBar } from 'src/components/molecules';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <HeaderBar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <div id="modal_root"></div>
    </>
  );
}

export default MyApp;

const Container = styled.div`
  padding-top: 90px;
`;

import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from 'src/shared';
import { HeaderBar } from 'src/components/molecules';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <HeaderBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

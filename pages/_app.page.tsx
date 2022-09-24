import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from 'src/shared';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

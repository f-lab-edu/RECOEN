import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { globalStyles } from 'src/shared';
import { HeaderBar } from 'src/components';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <Global styles={globalStyles} />
      <HeaderBar />
      <Container location={router.pathname}>
        <Component {...pageProps} />
      </Container>
      <div id="modal_root"></div>
    </div>
  );
}

export default MyApp;

interface StyleProps {
  location: string;
}

const Container = styled.div<StyleProps>`
  ${(props) => props.location !== '/write' && `padding-top: 90px;`}
  max-width: 1200px;
  margin: 0px auto;
`;

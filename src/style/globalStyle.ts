import { css } from '@emotion/react';
import { theme } from 'src/style/theme';

export const globalStyles = css`
  html {
    height: 100vh;
    width: 100vw;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.color.background};
    font-family: 'Pretendard';
    color: #ffffff;
  }
  a {
    text-decoration: none;
  }
`;

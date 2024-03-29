import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { theme } from 'src/style';

import { useResolveMenuBar } from 'src/hooks/useResolveMenuBar';

const NavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const menuBar = useResolveMenuBar();

  const resolvePosition = () => {
    const pathname = router.pathname;
    if (pathname == '/programming/[id]' || pathname == '/book/[id]')
      return 'position: absolute';
    if (pathname.includes('/write')) return 'position: relative';
    return 'position:fixed';
  };

  const resolveBackground = () => {
    if (pathname == '/article/[id]')
      return `background: ${theme.color.bluredBlack};`;
    return `background: ${theme.color.background};`;
  };

  return (
    <FixedContainer
      data-testid="fixedContainer"
      position={resolvePosition()}
      background={resolveBackground()}
    >
      <Container>
        <Link href="/">
          <Title lang="en">recoen.</Title>
        </Link>
        {menuBar}
      </Container>
    </FixedContainer>
  );
};

export default NavBar;

interface StyleProps {
  position?: string;
  background?: string | null;
}

const FixedContainer = styled.div<StyleProps>`
  ${({ position }) => position};
  ${({ background }) => background};
  width: 100vw;
  z-index: 99;
  border-bottom: 1px solid rgba(74, 76, 85, 0.3);
`;

const Container = styled.header`
  max-width: 1260px;
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 30px 0 30px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Menus from '../Menus/Menus';
import WritePageMenus from '../WritePageMenus/WritePageMenus';

const NavBar = () => {
  const router = useRouter();

  const resolvePosition = () => {
    const pathname = router.pathname;
    if (pathname == '/article/[id]') return 'position: absolute';
    if (pathname == '/write') return 'position: relative';
    return 'position:fixed';
  };

  return (
    <FixedContainer data-testid="fixedContainer" position={resolvePosition()}>
      <Container>
        <Link href="/">
          <Title>recoen.</Title>
        </Link>
        {router.pathname == '/write' ? <WritePageMenus /> : <Menus />}
      </Container>
    </FixedContainer>
  );
};

export default NavBar;

interface StyleProps {
  position: string;
}

const FixedContainer = styled.div<StyleProps>`
  width: 100%;
  ${({ position }) => position};
  z-index: 99;
`;

const Container = styled.div`
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  width: 100%;
  height: 80px;
  padding: 0 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Menus } from './Menus';
import WritePageMenus from './WritePageMenus';

const NavBar = () => {
  const router = useRouter();

  return (
    <Container isWritePage={router.pathname == '/write'}>
      <Link href="/">
        <Title>recoen.</Title>
      </Link>
      {router.pathname == '/write' ? <WritePageMenus /> : <Menus />}
    </Container>
  );
};

export default NavBar;

interface StyleProps {
  isWritePage: boolean;
}

const Container = styled.div<StyleProps>`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => !props.isWritePage && 'position: fixed;'}
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  z-index: 99;
`;

const Title = styled.a`
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Menus } from './Menus';
import { WritePageMenus } from './WritePageMenus';

export const HeaderBar = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/">
        <Title>recoen.</Title>
      </Link>
      {router.pathname == '/write' ? <WritePageMenus /> : <Menus />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
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

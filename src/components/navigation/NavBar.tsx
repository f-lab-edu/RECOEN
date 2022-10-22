import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Menus } from './Menus';
import WritePageMenus from './WritePageMenus';

const NavBar = () => {
  const router = useRouter();

  return (
    <FixedContainer isWritePage={router.pathname == '/write'}>
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
  isWritePage: boolean;
}

const FixedContainer = styled.div<StyleProps>`
  width: 100%;
  ${(props) => !props.isWritePage && 'position: fixed;'}
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

const Title = styled.a`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

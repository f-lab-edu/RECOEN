import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import NavBarItem from '../NavBarItem';
import navItems from 'src/fixtures/navItems';
import LoginButton from './LoginButton';

const Menus = () => {
  const router = useRouter();

  return (
    <Nav>
      <Wrapper>
        {navItems.map((item) => {
          return (
            <NavBarItem
              key={item.id}
              title={item.title}
              name={item.name}
              path={item.path}
              isActive={router.pathname.includes(item.path)}
            />
          );
        })}
      </Wrapper>
      <LoginButton />
    </Nav>
  );
};

export default Menus;

const Nav = styled.nav`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  padding-left: 70px;
`;

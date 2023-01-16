import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import Link from 'next/link';
import NavBarItem from '../NavBarItem';
import Button from 'src/components/ui/Button/Button';

import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';
import navItems from 'src/fixtures/navItems';

const Menus = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleOpenModal = useHandleOpenModal();

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

      <ButtonWrapper>
        {session ? (
          <>
            <Button label="로그아웃" onClick={signOut} />
            <Link href="/write" title="작성하기 페이지입니다.">
              {session.isAdmin && <Button label="+ 글쓰기" primary />}
            </Link>
          </>
        ) : (
          <Button
            label="로그인"
            primary
            onClick={() => handleOpenModal('LOGIN')}
          />
        )}
      </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

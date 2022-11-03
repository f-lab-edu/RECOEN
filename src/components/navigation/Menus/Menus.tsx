import React from 'react';
import styled from '@emotion/styled';
import NavBarItem from '../NavBarItem';
import { useRouter } from 'next/router';
import Button from 'src/components/ui/Button/Button';
import Link from 'next/link';

const Menus = () => {
  const router = useRouter();
  const items = [
    {
      id: 'article',
      name: 'Article',
      title: '개발 아티클 리스트 페이지입니다.',
      path: '/article',
    },
    {
      id: 'book',
      name: 'Book',
      title: '독후감 아티클 리스트 페이지입니다.',
      path: '/book',
    },
    {
      id: 'essay',
      name: 'Essay',
      title: '에세이 리스트 페이지입니다.',
      path: '/essay',
    },
    {
      id: 'quotes',
      name: 'Quotes',
      title: '인용구 리스트 페이지입니다.',
      path: '/quotes',
    },
    {
      id: 'about',
      name: 'About',
      title: '소개페이지입니다.',
      path: '/about',
    },
  ];

  return (
    <Nav>
      <Wrapper>
        {items.map((item) => {
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
        <Button label="로그인" />
        <Link href="/write" title="작성하기 페이지입니다.">
          <Button label="+ 글쓰기" primary />
        </Link>
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

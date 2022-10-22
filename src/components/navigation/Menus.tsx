import React from 'react';
import styled from '@emotion/styled';
import NavBarItem from './NavBarItem';
import { useRouter } from 'next/router';
import Button from 'src/components/ui/Button/Button';
import Link from 'next/link';

export const Menus = () => {
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
      path: '/dev',
    },
    {
      id: 'essay',
      name: 'Essay',
      title: '에세이 리스트 페이지입니다.',
      path: '/dev',
    },
    {
      id: 'quotes',
      name: 'Quotes',
      title: '인용구 리스트 페이지입니다.',
      path: '/dev',
    },
    {
      id: 'about',
      name: 'About',
      title: '소개페이지입니다.',
      path: '/dev',
    },
  ];

  return (
    <>
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
      </Nav>
      <ButtonWrapper>
        <Button label="로그인" onClick={() => console.log('로그인')} />
        <Link href="/write" title="작성하기 페이지입니다.">
          <a>
            <Button label="+ 글쓰기" primary />
          </a>
        </Link>
      </ButtonWrapper>
    </>
  );
};

const Nav = styled.nav`
  position: absolute;
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  gap: 40px;
  list-style: none;
  padding-left: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

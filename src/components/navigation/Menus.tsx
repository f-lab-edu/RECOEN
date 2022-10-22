import React from 'react';
import styled from '@emotion/styled';
import NavBarItem from './NavBarItem';
import { useRouter } from 'next/router';

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
    <nav>
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
    </nav>
  );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  width: 1024px;
  padding-left: 0;
`;

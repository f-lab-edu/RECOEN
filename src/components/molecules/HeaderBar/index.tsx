import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { HeaderBarItem } from 'src/components/atoms';

export const HeaderBar = () => {
  // NOTE : 추후 각 페이지 만들어지면 path 수정하기
  const items = [
    {
      id: 'development',
      name: 'Development',
      title: '개발 아티클 리스트 페이지입니다.',
      path: '/development',
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

  const router = useRouter();

  return (
    <Container>
      <Link href="/">
        <Title>recoen.</Title>
      </Link>
      <nav>
        <Wrapper>
          {items.map((item) => {
            return (
              <HeaderBarItem
                key={item.id}
                title={item.title}
                name={item.name}
                path={item.path}
                isActive={item.path == router.pathname}
              />
            );
          })}
        </Wrapper>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90px;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
`;

const Title = styled.a`
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

const Wrapper = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

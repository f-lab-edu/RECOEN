import React from 'react';
import Link from 'next/link';

import styled from '@emotion/styled';

export const HeaderBar = () => {
  return (
    <Container>
      <Link href="/">
        <Title>RECOEN.</Title>
      </Link>
      <Wrapper>
        <Link href="/dev">
          <BarItem>Dev</BarItem>
        </Link>
        <Link href="/book">
          <BarItem>Book</BarItem>
        </Link>
        <Link href="/essay">
          <BarItem>Essay</BarItem>
        </Link>
        <Link href="/Quotes">
          <BarItem>Quotes</BarItem>
        </Link>
        <Link href="/About">
          <BarItem>About</BarItem>
        </Link>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 90vw;
  height: 90px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
`;

const Title = styled.a`
  font-size: 25px;
  color: #ffffff;
  cursor: pointer;
`;

const Wrapper = styled.nav`
  display: flex;
  gap: 40px;
`;

const BarItem = styled.a`
  color: #ffffff;
  cursor: pointer;
`;

import React from 'react';
import styled from '@emotion/styled';

const MobileWritePage = () => {
  return (
    <Container>
      <Text>This page is not supported on this devices.</Text>
    </Container>
  );
};

export default MobileWritePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 98;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    0.3deg,
    rgba(31, 32, 38, 1) 46.7%,
    rgba(64, 65, 71, 1) 109.2%
  );
`;

const Text = styled.div`
  text-align: center;
  font-size: 2rem;
  display: block;
`;

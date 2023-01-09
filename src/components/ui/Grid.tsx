import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactElement;
}

const Grid = ({ children }: Props) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Grid;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  gap: 20px;

  @media screen and (max-width: 1260px) {
    width: 800px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    width: 380px;
    grid-template-columns: 1fr;
  }
`;

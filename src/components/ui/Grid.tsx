import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactElement;
}

const Grid = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Grid;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1260px;
  gap: 20px;
  justify-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 60px;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

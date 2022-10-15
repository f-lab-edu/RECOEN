import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactElement;
}

export const Grid = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  gap: 20px;
  justify-items: center;
  box-sizing: border-box;
  margin: 0 auto;
`;

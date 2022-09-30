import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactElement;
}

export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  padding-top: 50px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
`;

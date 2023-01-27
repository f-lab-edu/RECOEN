import React from 'react';
import styled from '@emotion/styled';
import { ArticleCategory } from 'src/types/article';

interface Props {
  children: React.ReactElement;
  category: ArticleCategory;
}

const Grid = ({ children, category }: Props) => {
  switch (category) {
    case 'essay':
      return <VTwoGrid>{children}</VTwoGrid>;
    default:
      return <VOneGrid>{children}</VOneGrid>;
  }
};

export default Grid;

interface VersionProps {
  children: React.ReactElement;
}

const VOneGrid = ({ children }: VersionProps) => {
  return (
    <VOneContainer>
      <VOneWrapper>{children}</VOneWrapper>
    </VOneContainer>
  );
};

const VTwoGrid = ({ children }: VersionProps) => {
  return (
    <VTwoContainer>
      <VTwoWrapper>{children}</VTwoWrapper>
    </VTwoContainer>
  );
};

// version one grid style
const VOneContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 60px;
`;

const VOneWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    width: 800px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    width: 380px;
    grid-template-columns: 1fr;
  }
`;

// version two grid style
const VTwoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const VTwoWrapper = styled.div`
  width: 1200px;

  @media screen and (max-width: 1200px) {
    width: 800px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'src/style/theme';

interface Props {
  mdxTitle: React.ReactElement;
  image: React.ReactElement;
  mdxRemote: React.ReactElement;
}

const DetailMDX: React.FC<Props> = ({ mdxTitle, image, mdxRemote }) => {
  return (
    <Container>
      {mdxTitle}
      <ImageWrapper>{image}</ImageWrapper>
      {mdxRemote}
    </Container>
  );
};

export default DetailMDX;

const Container = styled.main`
  width: 1280px;
  padding: 10px 200px;
  margin: 0 auto;
  margin-top: 200px;
  background-color: ${theme.color.background};
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  position: relative;
`;

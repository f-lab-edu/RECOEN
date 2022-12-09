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
  position: absolute;
  width: 1280px;
  padding: 10px 200px;
  margin: 0 auto;
  background-color: ${theme.color.background};
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 300px;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  position: relative;
`;

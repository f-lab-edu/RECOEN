import React from 'react';
import styled from '@emotion/styled';

interface Props {
  mdxTitle: React.ReactElement;
  image: React.ReactElement;
  mdxRemote: React.ReactElement;
}

const DetailMDX: React.FC<Props> = ({ mdxTitle, image, mdxRemote }) => {
  return (
    <>
      <Space />
      <Container>{mdxTitle}</Container>
      <Hr />
      <Container>
        <ImageWrapper>{image}</ImageWrapper>
        {mdxRemote}
      </Container>
    </>
  );
};

export default DetailMDX;
const Space = styled.div`
  margin-top: 200px;
`;

const Container = styled.main`
  width: 1280px;
  padding: 10px 200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  position: relative;
`;

const Hr = styled.div`
  width: 100vw;
  margin-top: 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid #4a4c55;
  transform: scaleY(0.5);
`;

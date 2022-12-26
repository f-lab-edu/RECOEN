import React from 'react';
import styled from '@emotion/styled';

interface Props {
  mdxTitle: React.ReactElement;
  image: React.ReactElement;
  mdxRemote: React.ReactElement;
}

const ArticleDetail: React.FC<Props> = ({ mdxTitle, image, mdxRemote }) => {
  return (
    <Container>
      <Space />
      <Wrapper>{mdxTitle}</Wrapper>
      <Hr />
      <Wrapper>
        <ImageWrapper>{image}</ImageWrapper>
        {mdxRemote}
      </Wrapper>
    </Container>
  );
};

export default ArticleDetail;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Space = styled.div`
  margin-top: 200px;
`;

const Wrapper = styled.main`
  max-width: 880px;
  width: 100%;
  padding: 10px 30px 10px 30px;
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

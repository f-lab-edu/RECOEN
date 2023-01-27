import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from 'src/style';
import Time from './Time';

import { ViewArticleElement } from 'src/types/article';

interface Props {
  article: ViewArticleElement;
}

const Essay = ({ article }: Props) => {
  return (
    <StyledLink
      data-testid="essay"
      href={`/essay/${article._id}`}
      key={article._id}
    >
      <Time createdAt={article.createdAt} />
      <Wrapper>
        <Title aria-label={`제목 : ${article.title}`}>{article.title}</Title>
        <Desc aria-label={`설명문 : ${article.description}`}>
          {article.description}
        </Desc>
      </Wrapper>
      <ImageWrapper>
        <Image
          src={article.imgUrl}
          alt="Thumbnail of essay-article"
          placeholder="blur"
          blurDataURL={article.blurDataURL}
          fill
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </ImageWrapper>
    </StyledLink>
  );
};

export default Essay;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
  border-bottom: 2px solid ${theme.color.gray200};
  color: ${theme.color.gray100};
  transition: 0.3s ease-in-out;

  :hover {
    color: ${theme.color.white};
  }
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: 110px;
  position: relative;
  object-fit: cover;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Wrapper = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0 30px;
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 2px;
`;

const Desc = styled.p`
  font-weight: 200;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  letter-spacing: 0.3px;
`;

import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { ViewArticleElement } from 'src/types/article';
import { convertDateFormat } from 'src/utils';

interface Props {
  article: ViewArticleElement;
  index: number;
}

const Article = ({ article, index }: Props) => {
  return (
    <StyledLink
      data-testid="article"
      href={`/${article.category}/${article._id}`}
    >
      <Container>
        <ImageWrapper>
          <Image
            src={article.imgUrl}
            alt="Thumbnail of article"
            placeholder="blur"
            blurDataURL={article.blurDataURL}
            fill
            style={{ objectFit: 'cover' }}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        </ImageWrapper>
        <Wrapper>
          <div>
            <Title aria-label={`제목 : ${article.title}`}>
              {article.title}
            </Title>
            <Desc aria-label={`설명문 : ${article.description}`}>
              {article.description}
            </Desc>
          </div>
          <Date>{convertDateFormat(article.createdAt)}</Date>
        </Wrapper>
      </Container>
    </StyledLink>
  );
};

export default Article;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

const Container = styled.article`
  width: 380px;
  height: 400px;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 315px;
  }
`;

const ImageWrapper = styled.div`
  width: 380px;
  height: 220px;
  position: relative;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 315px;
  }
`;

const Wrapper = styled.article`
  box-sizing: border-box;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f3f3f3;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 315px;
  }
`;

const Desc = styled.p`
  font-weight: 200;
  font-size: 0.9rem;
  color: #9599a0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  letter-spacing: 0.3px;

  @media screen and (max-width: 768px) {
    width: 315px;
  }
`;

const Date = styled.time`
  font-weight: 200;
  font-size: 0.9rem;
  color: #9599a0;
`;

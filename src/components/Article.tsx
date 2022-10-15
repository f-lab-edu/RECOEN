import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  path: string;
  imgUrl: string;
  blurDataURL: string;
}

export const Article = ({
  title,
  description,
  path,
  imgUrl,
  blurDataURL,
}: Props) => {
  return (
    <Link href={`/article/${path}`}>
      <Anchor>
        <Container>
          <ImageWrapper>
            <CustomImage
              src={imgUrl}
              alt="Thumbnail of article"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </ImageWrapper>
          <Wrapper>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
            <Date>2022.10.23 7min read</Date>
          </Wrapper>
        </Container>
      </Anchor>
    </Link>
  );
};

const Container = styled.article`
  width: 350px;
  height: 400px;
  border-radius: 16px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Anchor = styled.a`
  text-decoration-line: none;
`;

const ImageWrapper = styled.div`
  width: 320px;
  height: 200px;
  position: relative;
`;

const CustomImage = styled(Image)`
  :hover {
    transform: scale(1.09);
    border-radius: 16px;
  }
  transition: all 0.3s ease-in-out;
`;

const Wrapper = styled.article``;

const Title = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Desc = styled.p`
  font-weight: 200;
  font-size: 14px;
  color: #9599a0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;
`;

const Date = styled.span`
  font-weight: 200;
  font-size: 14px;
  color: #9599a0;
`;

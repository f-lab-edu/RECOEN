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
            <div>
              <Title>{title}</Title>
              <Desc>{description}</Desc>
            </div>
            <Date>2022.10.23 7min read</Date>
          </Wrapper>
        </Container>
      </Anchor>
    </Link>
  );
};

const Container = styled.article`
  width: 380px;
  height: 400px;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0;
`;

const Anchor = styled.a`
  text-decoration-line: none;
`;

const ImageWrapper = styled.div`
  width: 380px;
  height: 220px;
  position: relative;
`;

const CustomImage = styled(Image)`
  :hover {
    transform: scale(1.09);
    border-radius: 16px;
  }
  transition: all 0.3s ease-in-out;
`;

const Wrapper = styled.article`
  box-sizing: border-box;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
  line-height: 1.4;
  letter-spacing: 0.3px;
`;

const Date = styled.time`
  font-weight: 200;
  font-size: 14px;
  color: #9599a0;
`;
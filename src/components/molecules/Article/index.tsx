import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Space from 'public/space.webp';

interface Props {
  title: string;
  description: string;
  path: string;
}

export const Article = ({ title, description, path }: Props) => {
  return (
    <Link href={`/article/${path}`}>
      <Anchor>
        <Container>
          <CustomImage
            src={Space}
            alt="Thumbnail of article"
            width="330"
            height="330"
          />
          <Wrapper>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </Wrapper>
        </Container>
      </Anchor>
    </Link>
  );
};

const Container = styled.article`
  background-color: #2d2f35;
  width: 350px;
  height: 450px;
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

const CustomImage = styled(Image)`
  border-radius: 16px;
`;

const Wrapper = styled.article``;

const Title = styled.h3``;

const Desc = styled.p``;

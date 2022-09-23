import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  path: string;
}

export const Article = ({ title, description, path }: Props) => {
  return (
    <Link href={`/article/${path}`}>
      <a>
        <Title>Title : {title}</Title>
        <Desc>Description : {description}</Desc>
      </a>
    </Link>
  );
};

const Title = styled.div``;

const Desc = styled.div``;

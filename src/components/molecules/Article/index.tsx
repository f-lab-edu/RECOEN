import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  description: string;
}

export const Article = ({ title, description }: Props) => {
  return (
    <article>
      <Title>Title : {title}</Title>
      <Desc>Description : {description}</Desc>
    </article>
  );
};

const Title = styled.div``;

const Desc = styled.div``;

import React from 'react';
import styled from '@emotion/styled';

interface Props {
  isActive: boolean;
  path: string;
  title: string;
  name: string;
}

export const HeaderBarItem = ({ isActive, path, title, name }: Props) => {
  console.log(isActive);
  return (
    <Link href={path} title={title}>
      <Item>{name}</Item>
    </Link>
  );
};

const Link = styled.a`
  cursor: pointer;
  text-decoration-line: none;
`;

const Item = styled.li`
  color: #ffffff;
  display: inline;
`;

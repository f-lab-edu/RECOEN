import React from 'react';
import styled from '@emotion/styled';

interface Props {
  isActive: boolean;
  path: string;
  title: string;
  name: string;
}

interface StyleProps {
  isActive: boolean;
}

export const HeaderBarItem = ({ isActive, path, title, name }: Props) => {
  console.log(isActive);
  return (
    <Link href={path} title={title} isActive={isActive}>
      <Item>{name}</Item>
    </Link>
  );
};

const Link = styled.a<StyleProps>`
  cursor: pointer;
  text-decoration-line: none;
  display: flex;
  align-items: center;
  position: relative;
  ${(props) =>
    props.isActive &&
    `:before {
    content: '';
    position: absolute;
    left: -15px;
    background-color: #0af5cb;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }`}
`;

const Item = styled.li`
  color: #ffffff;
`;

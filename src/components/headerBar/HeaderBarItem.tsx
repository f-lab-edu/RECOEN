import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface Props {
  isActive: boolean;
  path: string;
  title: string;
  name: string;
}

export const HeaderBarItem = ({ isActive, path, title, name }: Props) => {
  return (
    <StyledLink href={path} title={title} isActive={isActive}>
      <Item>{name}</Item>
    </StyledLink>
  );
};

interface StyleProps {
  isActive: boolean;
}

const StyledLink = styled(Link)<StyleProps>`
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

const Item = styled.a`
  color: #ffffff;
  cursor: pointer;
`;

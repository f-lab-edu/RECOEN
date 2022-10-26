import React, { useState } from 'react';
import styled from '@emotion/styled';

export interface Props {
  label: string;
  deletable?: boolean;
  onClick?: () => void;
}

const Tag = ({ label, deletable, onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    if (!onClick) return;
    setIsClicked(isClicked);
    onClick();
  };
  return (
    <StyledTag
      deletable={deletable}
      isClicked={isClicked}
      onClick={handleOnClick}
    >
      {label}
    </StyledTag>
  );
};

export default Tag;

interface StyleProps {
  deletable?: boolean;
  isClicked?: boolean;
}

const StyledTag = styled.div<StyleProps>`
  :hover {
    border: 1px solid #5c62f3;
    color: #5c62f3;
  }
  ${({ deletable, isClicked }) =>
    !deletable &&
    isClicked &&
    `    
    border: 1px solid #5c62f3;
    color: #5c62f3;
    `}
`;

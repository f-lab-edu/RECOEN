import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import XImage from '../../../../public/x.png';

export interface Props {
  label: string;
  deletable?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
}

const Chip = ({ label, deletable, readOnly, onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    if (!onClick) return;
    setIsClicked(isClicked);
    onClick();
  };
  return (
    <StyledChip
      deletable={deletable}
      readOnly={readOnly}
      isClicked={isClicked}
      onClick={handleOnClick}
    >
      {label}
      {deletable && (
        <Image src={XImage} alt="취소이미지" width={8} height={8} />
      )}
    </StyledChip>
  );
};

export default Chip;

interface StyleProps {
  deletable?: boolean;
  readOnly?: boolean;
  isClicked?: boolean;
}

const StyledChip = styled.div<StyleProps>`
  padding: 12px;
  background: #32363d;
  border: 1px solid #32363d;
  border-radius: 8px;
  transition: 0.1s ease-in-out;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: ${({ deletable }) => deletable && `#5c62f3`};
  ${({ readOnly }) =>
    !readOnly &&
    `
    :hover {
    border: 1px solid #5c62f3;
    color: #5c62f3;
  }
  `}
  ${({ deletable, isClicked }) =>
    !deletable &&
    isClicked &&
    `    
    border: 1px solid #5c62f3;
    color: #5c62f3;
    `}

  ${({ readOnly }) =>
    readOnly &&
    `
  color: #5c62f3;
  `}
`;

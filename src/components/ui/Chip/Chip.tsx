import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import XImage from '../../../../public/x.png';
import { theme } from 'src/style/theme';

export interface Props {
  label: string;
  deletable?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
}

const Chip = ({ label, deletable, readOnly, onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    setIsClicked(!isClicked);
    onClick?.();
  };
  return (
    <StyledChip
      deletable={deletable}
      readOnly={readOnly}
      isClicked={isClicked}
      onClick={handleOnClick}
    >
      {label}
      {deletable && <Image src={XImage} alt="삭제" width={8} height={8} />}
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
  background: ${theme.color.gray200};
  border: 1px solid ${theme.color.gray200};
  border-radius: 8px;
  transition: 0.1s ease-in-out;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: ${({ deletable }) => deletable && `${theme.color.primary}`};
  ${({ readOnly }) =>
    !readOnly &&
    `
    :hover {
      border: 1px solid ${theme.color.primary};
      color: ${theme.color.primary};
    }
  `}
  ${({ deletable, isClicked }) =>
    !deletable &&
    isClicked &&
    `    
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.primary};
    `}

  ${({ readOnly }) =>
    readOnly &&
    `
    color: ${theme.color.primary};
    cursor:default;
  `}
`;

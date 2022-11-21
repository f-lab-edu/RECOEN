import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import XImage from '../../../../public/x.png';
import { theme } from 'src/style/theme';

export interface Props {
  label: string;
  deletable?: boolean;
  readOnly?: boolean;
  isSelected?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

const Chip = ({
  label,
  deletable,
  readOnly,
  isSelected,
  clickable,
  onClick,
}: Props) => {
  const handleOnClick = () => {
    onClick?.();
  };
  return (
    <StyledChip
      deletable={deletable}
      clickable={clickable}
      readOnly={readOnly}
      isSelected={isSelected}
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
  isSelected?: boolean;
  clickable?: boolean;
}

const StyledChip = styled.div<StyleProps>`
  padding: 10px;
  ${({ clickable }) => clickable && `padding: 10px 20px 10px 20px`};
  background: ${theme.color.gray200};
  border: 1px solid ${theme.color.gray200};
  border-radius: 16px;
  transition: 0.1s ease-in-out;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: ${({ deletable }) =>
    deletable ? `${theme.color.primary}` : `${theme.color.mainText}`};
  ${({ readOnly }) =>
    !readOnly &&
    `
    :hover {
      border: 1px solid ${theme.color.primary};
      color: ${theme.color.primary};
    }
  `}
  ${({ deletable, isSelected }) =>
    !deletable &&
    isSelected &&
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

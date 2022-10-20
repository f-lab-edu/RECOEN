import React from 'react';
import styled from '@emotion/styled';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'normal';

export interface Props {
  label: string;
  buttonType: ButtonType;
  onClick: () => void;
}

const Button = ({ label, buttonType, onClick }: Props) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <StyledButton buttonType={buttonType} onClick={handleOnClick} disabled>
      {label}
    </StyledButton>
  );
};

export default Button;

interface StyledProps {
  buttonType: ButtonType;
}

const getBackgroundColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case 'primary':
      return '#3941FF';
    case 'secondary':
      return 'transparent';
    case 'tertiary':
      return 'transparent';
    case 'normal':
      return 'transparent';
    default:
      return null;
  }
};

const getFontColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case 'primary':
      return '#ffffff';
    case 'secondary':
      return '#0af5cb';
    case 'tertiary':
      return '#494c56';
    case 'normal':
      return '#494c56';
    default:
      return null;
  }
};

const getBorderColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case 'primary':
      return '#3941FF';
    case 'secondary':
      return '#0af5cb';
    case 'tertiary':
      return '#494c56';
    case 'normal':
      return 'transparent';
    default:
      return null;
  }
};

const StyledButton = styled.button<StyledProps>`
  border: 1px solid ${({ buttonType }) => getBorderColor(buttonType)};
  background: ${({ buttonType }) => getBackgroundColor(buttonType)};
  color: ${({ buttonType }) => getFontColor(buttonType)};
  font-size: 16px;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 2px;
`;

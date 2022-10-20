import React from 'react';
import styled from '@emotion/styled';

export interface Props {
  label: string;
  primary?: boolean;
  onClick: () => void;
}

const Button = ({ label, primary, onClick }: Props) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <StyledButton
      primary={primary}
      onClick={handleOnClick}
      onMouseOver={() => {
        console.log('호버');
      }}
      disabled
    >
      {label}
    </StyledButton>
  );
};

export default Button;

interface StyledProps {
  primary?: boolean;
}

const StyledButton = styled.button<StyledProps>`
  font-size: 16px;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 2px;
  color: #4a4c55;
  :hover {
    color: #9599a0;
  }
`;

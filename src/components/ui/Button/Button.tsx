import React from 'react';
import styled from '@emotion/styled';

export interface Props {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ label, primary, disabled = false, onClick }: Props) => {
  return (
    <StyledButton primary={primary} onClick={onClick} disabled={disabled}>
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
  border: none;
  background: transparent;
  :hover {
    color: #9599a0;
  }
  :disabled {
    cursor: not-allowed;
  }
  ${({ primary }) =>
    primary &&
    `
  color: #ffffff;
  background: #3941FF;
  :hover{
    background: #2B31C7;
    color: #ffffff;
  }
  :disabled {
    background: #4a4c55;
    color:#9599a0;
  }
  `}
  transition:0.2s ease-in-out;
`;

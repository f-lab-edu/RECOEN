import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'src/style';

export interface Props {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
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
  font-size: 0.9rem;
  cursor: pointer;
  padding: 10px 22px;
  border-radius: 12px;
  color: ${theme.color.mainText};
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  :hover {
    color: ${theme.color.white};
  }
  :disabled {
    cursor: not-allowed;
  }
  ${({ primary }) =>
    primary &&
    `
  color: #ffffff;
  background: ${theme.color.primary};
  :hover{
    opacity:0.9;
    color: #ffffff;
  }
  :disabled {
    background: ${theme.color.disabled};
    color:#9599a0;
  }
  `}
  transition:0.2s ease-in-out;
`;

import React from 'react';
import styled from '@emotion/styled';

type ButtonType = 'primary' | 'secondary';

interface Props {
  label: string;
  buttonType: ButtonType;
  onClick: () => void;
}

export const Button = ({ label, buttonType, onClick }: Props) => {
  const handleOnClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <StyledButton buttonType={buttonType} onClick={handleOnClick}>
      {label}
    </StyledButton>
  );
};

interface StyledProps {
  buttonType: string;
}

const StyledButton = styled.button<StyledProps>`
  width: 84px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #0af5cb;
  background: ${(props) =>
    props.buttonType === 'primary' ? '#0af5cb' : `transparent`};
  color: ${(props) => (props.buttonType === 'primary' ? '#000000' : '#0af5cb')};
  font-size: 16px;
  cursor: pointer;
`;

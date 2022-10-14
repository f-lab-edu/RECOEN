import React from 'react';
import styled from '@emotion/styled';

interface Props {
  onChange: (value: string) => void;
}

export const TitleInput = ({ onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <StyledInput onChange={handleChange} placeholder="제목을 입력하세요." />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  outline: none;
  background: #232428;
  padding: 0px 20px;
  color: #ffffff;
  border: 1px solid #373a3f;
  border-left: none;
  box-sizing: border-box;
  ::placeholder {
    color: #4a4c55;
  }
`;

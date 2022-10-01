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
  font-size: 38px;
  outline: none;
  background: transparent;
  margin: 20px 0px;
  padding: 0px 40px;
  color: #ffffff;
  border: none;
  :placeholder {
    color: #c9c9c9;
  }
`;

import React from 'react';

interface Props {
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input = ({ onChange, placeholder }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <input onChange={handleChange} placeholder={placeholder} />;
};

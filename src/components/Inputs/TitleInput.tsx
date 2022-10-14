import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  onChange: (value: string) => void;
}

export const TitleInput = ({ onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #4a4c54',
      borderLeft: 'none',
    },
    '& :hover .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #4a4c54',
      borderLeft: 'none',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #4a4c54',
      borderLeft: 'none',
    },
    '& label': {
      color: '#4a4c54',
    },
    '& .MuiInputBase-input': {
      color: '#ffffff',
    },
    '& .MuiInputBase-root': {
      borderRadius: '0px',
      height: '100%',
    },
  };
  return (
    <TextField
      onChange={handleChange}
      label="제목을 입력하세요."
      variant="outlined"
      fullWidth
      sx={textFieldStyle}
    />
  );
};

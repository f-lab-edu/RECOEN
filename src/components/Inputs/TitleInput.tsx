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
    fontSize: '20px',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #373a3f',
      borderLeft: 'none',
    },
    '& :hover .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #373a3f !important',
      borderLeft: 'none !important',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #373a3f !important',
      borderLeft: 'none !important',
    },
    '& label': {
      color: '#4a4c54',
      fontSize: '18px',
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
      data-testid="titleInput"
      onChange={handleChange}
      label="제목을 입력해주세요"
      variant="outlined"
      fullWidth
      sx={textFieldStyle}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  outline: none;
  background: #232428;
  padding: 0px 40px;
  color: #ffffff;
  border: 1px solid #4a4c55;
  border-left: none;
  box-sizing: border-box;
  :placeholder {
    color: #c9c9c9;
  }
`;

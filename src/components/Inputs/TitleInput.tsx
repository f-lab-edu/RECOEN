import React from 'react';
import TextField from '@mui/material/TextField';
import { useArticleElement } from 'src/hooks/useHandleArticle';

const TitleInput = () => {
  const { articleElements, setArticleElement } = useArticleElement();
  return (
    <TextField
      data-testid="titleInput"
      onChange={(e) => setArticleElement({ title: e.target.value })}
      value={articleElements.title}
      label="제목을 입력해주세요"
      variant="outlined"
      fullWidth
      sx={textFieldStyle}
    />
  );
};

export default TitleInput;

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

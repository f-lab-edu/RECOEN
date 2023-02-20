import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { UseArticleElement, ArticleCategory } from 'src/types/article';

interface Props {
  useArticleElement: UseArticleElement;
}

const CategoryInput: React.FC<Props> = ({ useArticleElement }) => {
  const { articleElements, setArticleElement } = useArticleElement();

  const categories = ['programming', 'book', 'essay'];

  return (
    <FormControl sx={formStyles}>
      <InputLabel sx={{ color: '#4a4c54', fontSize: '18px' }}>
        카테고리
      </InputLabel>
      <Select
        labelId="category-select"
        id="category-select-id"
        value={articleElements.category}
        label="Category"
        sx={{
          borderRadius: '0px',
          height: '50px',
          color: '#4a4c54',
        }}
        onChange={(e) =>
          setArticleElement({ category: e.target.value as ArticleCategory })
        }
      >
        {categories.map((category) => {
          return (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CategoryInput;

const formStyles = {
  width: '200px',
  borderRadius: '0px',
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #373a3f',
  },
  '& :hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #373a3f !important',
  },
  '& .MuiSvgIcon-root': {
    color: '#373a3f',
  },
};

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from '@emotion/styled';

export function DropDown() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const categories = ['Article', 'Book', 'Essay'];

  return (
    <StyledFormControl
      sx={{
        width: '200px',
        borderRadius: '0px',
      }}
    >
      <InputLabel sx={{ color: '#4a4c54', fontSize: '18px' }}>
        Category
      </InputLabel>
      <Select
        labelId="category-select"
        id="category-select-id"
        value={category}
        label="Category"
        sx={{
          borderRadius: '0px',
          height: '50px',
          color: '#4a4c54',
        }}
        onChange={handleChange}
      >
        {categories.map((category) => {
          return (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          );
        })}
      </Select>
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)`
  & .MuiSvgIcon-root {
    color: #4a4c54;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #4a4c54;
  }
  & :hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid #4a4c54;
  }
`;

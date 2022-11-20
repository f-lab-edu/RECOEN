import React from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

import Chip from 'src/components/ui/Chip/Chip';

interface Props {
  tags: string[];
}

const TagSearch = ({ tags }: Props) => {
  return (
    <Container>
      {tags.map((tag, i) => {
        return <Chip key={uuidv4()} label={tag} />;
      })}
    </Container>
  );
};

export default TagSearch;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

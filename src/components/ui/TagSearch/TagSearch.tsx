import React, { useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

import Chip from 'src/components/ui/Chip/Chip';

import { useFilterArticle } from 'src/hooks/useFilterArticle';

interface Props {
  tags: string[];
}

const TagSearch = ({ tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filterArticle = useFilterArticle();

  const handleOnClick = (tag: string) => {
    if (tag === selectedTag) {
      setSelectedTag(null);
      filterArticle(null);
      return;
    }
    setSelectedTag(tag);
    filterArticle(tag);
  };

  return (
    <Container>
      {tags.map((tag) => {
        return (
          <Chip
            key={uuidv4()}
            label={tag}
            clickable
            isSelected={tag === selectedTag}
            onClick={() => handleOnClick(tag)}
          />
        );
      })}
    </Container>
  );
};

export default TagSearch;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1000px;
`;

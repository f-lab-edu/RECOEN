import React, { useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

import Chip from 'src/components/ui/Chip/Chip';
import Image from 'next/image';

import LeftArrow from '../../../public/leftArrow.png';
import RigthArrow from '../../../public/rightArrow.png';

interface Props {
  tags: string[];
}

const TagSearch = ({ tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleOnClick = (tag: string) => {
    if (tag === selectedTag) return setSelectedTag(null);
    setSelectedTag(tag);
  };

  return (
    <Container>
      {/* <StyleImage src={LeftArrow} width={30} height={30} alt="Left Arrow" /> */}
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
      {/* <StyleImage src={RigthArrow} width={30} height={30} alt="Rigth Arrow" /> */}
    </Container>
  );
};

export default TagSearch;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyleImage = styled(Image)`
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

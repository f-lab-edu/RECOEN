import React from 'react';
import styled from '@emotion/styled';

export interface Props {
  label: string;
  deletable?: {
    isDeletable: boolean;
    onClick: () => void;
  };
}

const Tag = ({ label }: Props) => {
  return (
    <StyledTag onMouseOver={() => console.log('마우스오버')}>{label}</StyledTag>
  );
};

export default Tag;

const StyledTag = styled.div`
  :hover {
    border: 1px solid #5c62f3;
    color: #5c62f3;
  }
`;

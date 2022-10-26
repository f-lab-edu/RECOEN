import React from 'react';
import styled from '@emotion/styled';

export interface Props {
  label: string;
  deletable?: boolean;
  onClick?: () => void;
}

const Tag = ({ label, deletable }: Props) => {
  return <StyledTag deletable={deletable}>{label}</StyledTag>;
};

export default Tag;

interface StyleProps {
  deletable?: boolean;
}

const StyledTag = styled.div<StyleProps>`
  :hover {
    border: 1px solid #5c62f3;
    color: #5c62f3;
  }
`;

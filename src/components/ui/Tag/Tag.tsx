import React from 'react';

export interface Props {
  label: string;
  deletable?: {
    isDeletable: boolean;
    onClick: () => void;
  };
}

const Tag = ({ label }: Props) => {
  return <div>{label}</div>;
};

export default Tag;

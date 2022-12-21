import React from 'react';
import { makeTitleFragment } from 'src/utils/makeTitleFragment';
import styled from '@emotion/styled';

const MDXThirdHead: React.FC<any> = (props) => {
  const fragment = makeTitleFragment(props.children);
  return (
    <H3 id={fragment}>
      <a href={`#${fragment}`} {...props} />
    </H3>
  );
};

export default MDXThirdHead;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  margin: 20px 0px;

  & a {
    color: #57a1f8;
    text-decoration: none;
  }
`;

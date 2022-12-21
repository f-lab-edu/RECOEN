import React from 'react';
import { makeTitleFragment } from 'src/utils/makeTitleFragment';
import styled from '@emotion/styled';

const MDXSecondHead: React.FC<any> = (props) => {
  const fragment = makeTitleFragment(props.children);
  return (
    <H2 id={fragment}>
      <a href={`#${fragment}`} {...props} />
    </H2>
  );
};

export default MDXSecondHead;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 2.3rem;
  margin: 35px 0px;
  & a {
    color: #57a1f8;
    text-decoration: none;
  }
`;

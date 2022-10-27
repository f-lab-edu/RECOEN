import React from 'react';
import { makeTitleFragment } from 'src/utils/makeTitleFragment';
import styled from '@emotion/styled';

const MDXFirstHead: React.FC<any> = (props) => {
  const fragment = makeTitleFragment(props.children);
  return (
    <H1 id={fragment}>
      <a href={`#${fragment}`} {...props} />
    </H1>
  );
};

export default MDXFirstHead;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 42px;
  margin: 40px 0px;
  & a {
    color: #57a1f8;
    text-decoration: none;
  }
`;

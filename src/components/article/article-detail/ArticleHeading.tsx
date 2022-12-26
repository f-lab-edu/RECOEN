import React from 'react';
import { makeTitleFragment } from 'src/utils/makeTitleFragment';
import styled from '@emotion/styled';

export const MDXFirstHead: React.FC<any> = (props) => {
  const fragment = makeTitleFragment(props.children);
  return (
    <H1 id={fragment}>
      <a href={`#${fragment}`} {...props} />
    </H1>
  );
};

const H1 = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  margin: 40px 0px;
  & a {
    color: #57a1f8;
    text-decoration: none;
  }
`;

export const MDXSecondHead: React.FC<any> = (props) => {
  const fragment = makeTitleFragment(props.children);
  return (
    <H2 id={fragment}>
      <a href={`#${fragment}`} {...props} />
    </H2>
  );
};

const H2 = styled.h2`
  font-weight: 400;
  font-size: 2.3rem;
  margin: 35px 0px;
  & a {
    color: #57a1f8;
    text-decoration: none;
  }
`;

export const MDXThirdHead: React.FC<any> = (props) => {
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

export const MDXForthHead: React.FC<any> = (props) => {
  const fragment = makeTitleFragment(props.children);
  return (
    <H4 id={fragment}>
      <a href={`#${fragment}`} {...props} />
    </H4>
  );
};

const H4 = styled.h3`
  font-weight: 400;
  font-size: 1.1rem;
  margin: 16px 0px;

  & a {
    color: #57a1f8;
    text-decoration: none;
  }
`;

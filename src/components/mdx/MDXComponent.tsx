import React from 'react';
import styled from '@emotion/styled';

const MDXComponent = {
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  pre: (props: any) => <CodeBlock {...props} />,
};

export default MDXComponent;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 42px;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 35px;
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 25px;
`;

const Paragraph = styled.p`
  color: #9599a0;
  font-weight: 200;
  letter-spacing: 1px;
  line-height: 27px;
`;

const CodeBlock = (props: any) => {
  return (
    <Pre>
      <Code {...props} />
    </Pre>
  );
};

const Code = styled.code``;

const Pre = styled.pre``;

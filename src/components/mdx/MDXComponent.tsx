import React from 'react';
import styled from '@emotion/styled';

const MDXComponent = {
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  pre: (props: any) => <CodeBlock {...props} />,
  img: (props: any) => <Image {...props} />,
  a: (props: any) => <Anchor {...props} />,
  em: (props: any) => <Em {...props} />,
  strong: (props: any) => <Strong {...props} />,
  blockquote: (props: any) => <BlockQuote {...props} />,
  li: (props: any) => <List {...props} />,
};

export default MDXComponent;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 42px;
  color: #57a1f8;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 35px;
  color: #57a1f8;
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 25px;
  color: #57a1f8;
`;

const Paragraph = styled.p`
  color: #aaadbf;
  font-weight: 300;
  letter-spacing: 0.9px;
  line-height: 25px;
`;

const Image = styled.img`
  box-sizing: border-box;
  width: 100%;
`;

const Em = styled.em`
  color: #ffffff;
  font-weight: bold;
`;

const Strong = styled.strong`
  color: #ffffff;
  font-weight: bold;
`;

const Anchor = styled.a`
  color: #3941ff;
  font-weight: bold;
`;

const BlockQuote = (props: any) => {
  return <Quote {...props} />;
};

const Quote = styled.blockquote`
  background: #34322c;
  width: 100%;
  margin: 0;
  padding: 15px 20px 15px 20px;
  box-sizing: border-box;
  border-left: 4px solid #f8d861;
  border-radius: 0 10px 10px 0;
  color: #f8d860;
  & p {
    color: #f8d860;
  }
`;

const List = styled.li`
  color: #aaadbf;
`;

const CodeBlock = (props: any) => {
  return (
    <Pre>
      <Code {...props} />
    </Pre>
  );
};

const Code = styled.code``;

const Pre = styled.pre`
  width: 100%;
  overflow-y: scroll;
`;

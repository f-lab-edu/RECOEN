import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'src/style/theme';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import MDXFirstHead from 'src/components/mdx/MDXFirstHead';
import MDXSecondHead from 'src/components/mdx/MDXSecondHead';
import MDXThirdHead from 'src/components/mdx/MDXThirdHead';

const MDXTag = {
  h1: (props: any) => <MDXFirstHead {...props} />,
  h2: (props: any) => <MDXSecondHead {...props} />,
  h3: (props: any) => <MDXThirdHead {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  pre: (props: any) => <CodeBlock {...props} />,
  img: (props: any) => <Image {...props} />,
  a: (props: any) => <Anchor {...props} />,
  em: (props: any) => <Em {...props} />,
  strong: (props: any) => <Strong {...props} />,
  blockquote: (props: any) => <BlockQuote {...props} />,
  li: (props: any) => <List {...props} />,
};

export default MDXTag;

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
  color: ${theme.color.primary};
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
  overflow-x: scroll hidden;
`;

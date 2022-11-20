import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'src/style/theme';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXTitle from 'src/components/mdx/MDXTitle';
import MDXTag from 'src/components/mdx/MDXComponent';

interface Props {
  content: MDXRemoteSerializeResult;
}

const DetailMDX: React.FC<Props> = ({ content }) => {
  return (
    <Container>
      <MDXTitle />
      <MDXRemote {...content} components={MDXTag} />
    </Container>
  );
};

export default DetailMDX;

const Container = styled.main`
  position: absolute;
  width: 1200px;
  padding: 100px 200px;
  margin: 0 auto;
  background-color: ${theme.color.background};
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;
`;

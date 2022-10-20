import React from 'react';
import styled from '@emotion/styled';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXComponent from 'src/components/mdx/MDXComponent';

interface Props {
  title: string;
  content: MDXRemoteSerializeResult;
  time?: string;
}

const DetailMDX: React.FC<Props> = ({ title, content, time }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <MDXRemote {...content} components={MDXComponent} />
    </Container>
  );
};

export default DetailMDX;

const Container = styled.main`
  position: absolute;
  width: 1200px;
  padding: 50px 200px;
  margin: 0 auto;
  background-color: #252628;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 340px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 45px;
  line-height: 65px;
`;

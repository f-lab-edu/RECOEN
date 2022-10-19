import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  content: string;
  time?: string;
}

const DetailMDX: React.FC<Props> = ({ title, content, time }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div>{content}</div>
    </Container>
  );
};

export default DetailMDX;

const Container = styled.main`
  position: absolute;
  width: 1200px;
  padding: 50px 100px;
  margin: 0 auto;
  background-color: #252628;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 340px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Title = styled.h1``;

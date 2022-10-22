import React from 'react';
import styled from '@emotion/styled';
import { HeroText } from './HeroText';

interface Props {
  text: string;
  listLength: number;
}

export const Hero = ({ text, listLength }: Props) => {
  return (
    <>
      <Layout>
        <HeroText text={text} listLength={listLength} />
      </Layout>
      <Hr />
    </>
  );
};

const Layout = styled.div`
  width: 1024px;
  margin: 0px auto;
`;

const Hr = styled.hr`
  border: 0.5px solid #494c56;
`;

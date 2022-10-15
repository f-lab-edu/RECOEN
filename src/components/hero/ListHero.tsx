import React from 'react';
import styled from '@emotion/styled';
import { HeroText } from './HeroText';

interface Props {
  heroText: string;
  listLength: number;
}

export const ListHero = ({ heroText, listLength }: Props) => {
  return (
    <>
      <Layout>
        <HeroText text={heroText} listLength={listLength} />
      </Layout>
      <Hr />
    </>
  );
};

const Layout = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

const Hr = styled.hr`
  border: 0.5px solid #494c56;
`;

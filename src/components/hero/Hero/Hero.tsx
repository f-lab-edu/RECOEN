import React from 'react';
import styled from '@emotion/styled';
import HeroText from '../HeroText';

interface Props {
  text: string;
  listLength: number;
}

const Hero = ({ text, listLength }: Props) => {
  return (
    <>
      <Layout>
        <HeroText text={text} listLength={listLength} />
      </Layout>
      <Hr />
    </>
  );
};

export default Hero;

const Layout = styled.div`
  width: 1200px;
  margin: 0px auto;
  margin-top: 120px;
`;

const Hr = styled.hr`
  border: 0.5px solid #494c56;
`;

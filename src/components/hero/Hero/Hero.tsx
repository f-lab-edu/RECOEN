import React from 'react';
import styled from '@emotion/styled';

import HeroText from '../HeroText';
import TagSearch from 'src/components/TagSearch/TagSearch';

interface Props {
  text: string;
  listLength: number;
}

const Hero = ({ text, listLength }: Props) => {
  return (
    <>
      <Layout>
        <HeroText text={text} listLength={listLength} />
        <TagSearch tags={['javascript', 'react']} />
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
  margin-bottom: 50px;
`;

const Hr = styled.hr`
  border: 0.5px solid #494c56;
`;

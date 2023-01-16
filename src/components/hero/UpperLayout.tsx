import React from 'react';
import styled from '@emotion/styled';
import TagSearch from 'src/components/ui/TagSearch/TagSearch';
import Hero from 'src/components/hero/Hero/Hero';

interface Props {
  children: React.ReactElement[];
}

const UpperLayout = ({ children }: Props) => {
  return (
    <>
      <Layout>{children}</Layout>
      <Hr />
    </>
  );
};

export default UpperLayout;

UpperLayout.Hero = Hero;
UpperLayout.TagSearch = TagSearch;

const Layout = styled.div`
  width: 1200px;
  margin: 0px auto;
  margin-top: 120px;
  margin-bottom: 50px;
  padding: 0 30px;

  @media screen and (max-width: 1260px) {
    width: 800px;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 60px);
  }
`;

const Hr = styled.hr`
  border: 0.5px solid #494c56;
`;

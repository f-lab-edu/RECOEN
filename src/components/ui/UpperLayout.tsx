import React from 'react';
import styled from '@emotion/styled';

interface Props {
  hero: React.ReactElement;
  tagSearch: React.ReactElement;
}

const UpperLayout = ({ hero, tagSearch }: Props) => {
  return (
    <>
      <Layout>
        {hero}
        {tagSearch}
      </Layout>
      <Hr />
    </>
  );
};

export default UpperLayout;

const Layout = styled.div`
  width: 1200px;
  margin: 0px auto;
  margin-top: 120px;
  margin-bottom: 50px;
`;

const Hr = styled.hr`
  border: 0.5px solid #494c56;
`;

import React from 'react';

import { TextEditor } from 'src/components';

import Category from 'src/components/Category';
import TitleInput from 'src/components/Inputs/TitleInput';
import styled from '@emotion/styled';

const WritePage = () => {
  return (
    <>
      <TitleWrapper>
        <Category />
        <TitleInput />
      </TitleWrapper>

      <TextEditor />
    </>
  );
};

export default WritePage;

const TitleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
`;

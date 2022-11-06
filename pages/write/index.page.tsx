import React from 'react';

import { useRecoilValue } from 'recoil';
import { openCreateModalState } from 'src/recoil/permit';

import { TextEditor } from 'src/components';

import Category from 'src/components/Category';
import CreateArticleModal from 'src/components/modals/CreateArticleModal/CreateArticleModal';
import TitleInput from 'src/components/Inputs/TitleInput';
import styled from '@emotion/styled';

const WritePage = () => {
  const isOpen = useRecoilValue(openCreateModalState);

  return (
    <>
      {isOpen && <CreateArticleModal />}
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

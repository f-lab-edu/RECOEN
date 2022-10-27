import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { openCreateModalStates } from 'src/recoil/permit';
import { TextEditor } from 'src/components';

import Category from 'src/components/Category';
import CreateArticleModal from 'src/components/modals/CreateArticleModal/CreateArticleModal';
import TitleInput from 'src/components/Inputs/TitleInput';
import styled from '@emotion/styled';

const WritePage = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const isOpen = useRecoilValue(openCreateModalStates);
  const articleElements = { title, content };

  return (
    <>
      {isOpen && <CreateArticleModal articleElements={articleElements} />}
      <TitleWrapper>
        <Category />
        <TitleInput onChange={setTitle} />
      </TitleWrapper>

      <TextEditor onChange={setContent} />
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

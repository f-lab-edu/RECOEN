import { useState } from 'react';
import {
  TextEditor,
  CreateArticleModal,
  DropDown,
  TitleInput,
} from 'src/components';
import styled from '@emotion/styled';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isOpen, setOpen] = useState<boolean>(false);
  const articleElements = { title, content };

  const handleOpenModal = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        <CreateArticleModal
          handleOpenModal={handleOpenModal}
          articleElements={articleElements}
        />
      )}
      <TitleWrapper>
        <DropDown />
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

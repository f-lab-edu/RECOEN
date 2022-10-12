import { useState } from 'react';
import { TextEditor, CreateArticleModal } from 'src/components';
import { TitleInput, Button } from 'src/components';
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
      <ButtonWrapper>
        <Button
          onClick={handleOpenModal}
          label="나가기"
          buttonType="tertiary"
        />
        <Button onClick={handleOpenModal} label="완료" buttonType="secondary" />
      </ButtonWrapper>
      <TitleWrapper>
        <TitleInput onChange={setTitle} />
      </TitleWrapper>

      <TextEditor onChange={setContent} />
    </>
  );
};

export default WritePage;

const ButtonWrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  margin-bottom: 10px;
`;

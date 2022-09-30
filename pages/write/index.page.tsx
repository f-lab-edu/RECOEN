import { useState } from 'react';
import { TextEditor, CreateArticleModal } from 'src/components';
import { Input } from 'src/components/Common';

import styled from '@emotion/styled';

const WritePage = () => {
  const [title, setTitle] = useState<string>();
  const [hashtag, setHashtag] = useState<string>();
  const [content, setContent] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>();
  const articleElements = { title, hashtag, content };

  const handleOpenModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <CreateArticleModal
          data-testid="createAritcleModal"
          handleOpenModal={handleOpenModal}
          articleElements={articleElements}
        />
      )}
      <button onClick={handleOpenModal}>생성하기</button>
      <TitleInput onChange={setTitle} placeholder="제목을 입력해주세요." />
      <HashtagInput
        onChange={setHashtag}
        placeholder="해시태그를 입력해주세요"
      />
      <TextEditor onChange={setContent} />
    </>
  );
};

export default WritePage;

const TitleInput = styled(Input)``;
const HashtagInput = styled(Input)``;

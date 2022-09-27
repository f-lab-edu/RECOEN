import { useState } from 'react';
import { TextEditor, CreateArticleModal } from 'src/components/molecules';
import { Input } from 'src/components/atoms';

import styled from '@emotion/styled';

const WritePage = () => {
  const [title, setTitle] = useState<string>();
  const [hashtag, setHashtag] = useState<string>();
  const [content, setContent] = useState<string>();
  const [isOpen, setOpen] = useState<boolean>();
  const articleElements = { title, hashtag, content };

  const openCreateModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <CreateArticleModal articleElements={articleElements} />}
      <button onClick={openCreateModal}>생성하기</button>
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

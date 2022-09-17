import { useState } from 'react';
import { TextEditor } from 'src/components/molecules';
import { Input } from 'src/components/atoms';
import styled from '@emotion/styled';
import axios from 'axios';

const WriteContainer = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [content, setContent] = useState<string>();
  const handleCreate = () => {
    axios
      .post('/api/article/create', {
        title,
        description,
        content,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(title, description, content);

  return (
    <>
      <button onClick={handleCreate}>생성하기</button>
      <TitleInput onChange={setTitle} placeholder="제목을 입력해주세요." />
      <DescriptionInput
        onChange={setDescription}
        placeholder="글에대한 설명을 입력해주세요"
      />
      <TextEditor onChange={setContent} />
    </>
  );
};

export default WriteContainer;

const TitleInput = styled(Input)``;
const DescriptionInput = styled(Input)``;

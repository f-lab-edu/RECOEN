import { useState } from 'react';
import { TextEditor } from 'src/components/molecules';
import { Input } from 'src/components/atoms';
import { client } from 'src/utils';
import styled from '@emotion/styled';

const WritePage = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [content, setContent] = useState<string>();
  const handleCreateArticle = () => {
    client.post('/api/article', {
      title,
      description,
      content,
    });
  };

  console.log(title, description, content);

  return (
    <>
      <button onClick={handleCreateArticle}>생성하기</button>
      <TitleInput onChange={setTitle} placeholder="제목을 입력해주세요." />
      <DescriptionInput
        onChange={setDescription}
        placeholder="글에대한 설명을 입력해주세요"
      />
      <TextEditor onChange={setContent} />
    </>
  );
};

export default WritePage;

const TitleInput = styled(Input)``;
const DescriptionInput = styled(Input)``;

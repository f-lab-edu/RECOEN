import React, { useState } from 'react';
import { Modal, Input } from 'src/components/atoms';
import { ImageUpload } from 'src/components/atoms';
import { client } from 'src/utils';
import styled from '@emotion/styled';

interface Props {
  articleElements: {
    title?: string;
    hashtag?: string;
    content?: string;
  };
}

export const CreateArticleModal = ({ articleElements }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [description, setDescription] = useState<string>();
  console.log(articleElements);

  const handleCreateArticle = () => {
    client.post('/api/article', {
      title: articleElements.title,
      description: articleElements.hashtag, // NOTE : 서버쪽 코드 수정 후 수정하기
      content: articleElements.content,
    });
  };

  return (
    <Modal>
      <>
        <ImageUpload setImageUrl={setImageUrl} />
        <DescriptionInput onChange={setDescription} />
      </>
    </Modal>
  );
};

const DescriptionInput = styled(Input)``;

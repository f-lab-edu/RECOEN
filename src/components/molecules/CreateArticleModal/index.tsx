import React, { useState } from 'react';
import { Modal, Input } from 'src/components/atoms';
import { ImageUpload } from 'src/components/atoms';
import { createArticle } from 'src/utils';
import styled from '@emotion/styled';

interface Props {
  articleElements: {
    title?: string;
    hashtag?: string;
    content?: string;
  };
}

export const CreateArticleModal = ({ articleElements }: Props) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [description, setDescription] = useState<string>();

  return (
    <Modal>
      <>
        <ImageUpload setImageUrl={setImgUrl} />
        <DescriptionInput onChange={setDescription} />
        <button
          onClick={() =>
            createArticle({ ...articleElements, imgUrl, description })
          }
        >
          생성하기
        </button>
      </>
    </Modal>
  );
};

const DescriptionInput = styled(Input)``;

import React, { useState } from 'react';
import { ImageUpload, Modal, Button, TagInput } from 'src/components';
import { createArticle } from 'src/utils';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { openCreateModalStates } from 'src/recoil/permit';

interface Props {
  articleElements: {
    title?: string;
    content?: string;
  };
}

export const CreateArticleModal = ({ articleElements }: Props) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const setClose = useSetRecoilState(openCreateModalStates);

  const handleModalClose = () => {
    setClose(false);
  };

  return (
    <Modal handleOpenModal={handleModalClose}>
      <>
        <ButtonWrapper data-testid="createArticleModal">
          <Button
            label="취소"
            buttonType="secondary"
            onClick={handleModalClose}
          />
          <Button
            label="저장"
            buttonType="primary"
            onClick={() =>
              createArticle({
                ...articleElements,
                imgUrl,
                description,
                tags,
              })
            }
          />
        </ButtonWrapper>
        <Guide>대표이미지</Guide>
        <ImageUpload setImgUrl={setImgUrl} />
        <Guide>태그(최대 3개)</Guide>
        <TagInput values={tags!} onChange={setTags} />
        <Guide>설명글</Guide>
        <input onChange={(e) => setDescription(e.target.value)} />
      </>
    </Modal>
  );
};

const Guide = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #9499a1;
  text-align: left;
  width: 350px;
`;

const ButtonWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 50px;
`;

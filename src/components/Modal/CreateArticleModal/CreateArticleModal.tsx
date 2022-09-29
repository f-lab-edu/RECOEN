import React, { useState } from 'react';
import { Modal, Input, Button } from 'src/components/Common';
import { ImageUpload } from 'src/components';
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
        <ButtonWrapper>
          <Button
            label="취소"
            buttonType="secondary"
            onClick={() => console.log('close modal')}
          />
          <Button
            label="저장"
            buttonType="primary"
            onClick={() =>
              createArticle({ ...articleElements, imgUrl, description })
            }
          />
        </ButtonWrapper>
        <Guide>대표이미지 선택</Guide>
        <ImageUpload setImageUrl={setImgUrl} />
        <Guide>태그를 선택하세요.</Guide>
        <DescriptionInput onChange={setDescription} />
        <Guide>설명글을 작성해주세요.</Guide>
      </>
    </Modal>
  );
};

const DescriptionInput = styled(Input)``;

const Guide = styled.h3`
  font-size: 16px;
  font-weight: 200;
  color: #494c56;
  padding-bottom: 20px;
  border-bottom: 1px solid #494c56;
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

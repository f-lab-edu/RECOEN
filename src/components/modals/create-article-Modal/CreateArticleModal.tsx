import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'src/style';

import BaseModal from '../base-modal/BaseModal';
import ImageUpload from 'src/components/Image-upload/ImageUpload';
import Button from 'src/components/ui/Button/Button';
import DescInput from 'src/components/Inputs/DescInput/DescInput';
import TagInput from 'src/components/Inputs/TagInput/TagInput';

import {
  useResolveSaveFunction,
  useArticleElement,
} from 'src/hooks/useHandleArticle';
import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

const CreateArticleModal = () => {
  const handleSaveArticle = useResolveSaveFunction();
  const handleOpenModal = useHandleOpenModal();

  return (
    <BaseModal
      handleOpenModal={() => handleOpenModal(null)}
      options={{ right: true }}
    >
      <Container>
        <Wrapper data-testid="createArticleModal">
          <H2>글 설정</H2>
          <ButtonWrapper>
            <Button label="취소" onClick={() => handleOpenModal(null)} />
            <Button label="저장" primary onClick={handleSaveArticle} />
          </ButtonWrapper>
        </Wrapper>
        <Guide>대표이미지</Guide>
        <ImageUpload useArticleElement={useArticleElement} />
        <Guide>태그(최대 3개)</Guide>
        <TagInput useArticleElement={useArticleElement} />
        <Guide>설명글</Guide>
        <DescInput useArticleElement={useArticleElement} />
      </Container>
    </BaseModal>
  );
};

export default CreateArticleModal;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.nero};
`;

const Guide = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #9499a1;
  text-align: left;
  width: 350px;
`;

const Wrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 24px 42px;
  border-bottom: 1px solid #494c56;
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const H2 = styled.h2`
  color: #e3e3e3;
  margin: 0px;
  font-weight: 400;
`;

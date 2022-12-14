import React from 'react';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';
import Button from 'src/components/ui/Button/Button';
import Chip from 'src/components/ui/Chip/Chip';

import { useSetRecoilState } from 'recoil';
import { writeStates } from 'src/recoil/article';
import { ArticleElement } from 'src/types/article';

import { useHandleDelete } from 'src/hooks/useHandleArticle';
import { convertDateFormat } from 'src/utils';

interface Props {
  article: ArticleElement;
}

const ArticleDetailTitle: React.FC<Props> = ({ article }) => {
  const router = useRouter();
  const setWriteState = useSetRecoilState(writeStates);
  const handleDelete = useHandleDelete(article.category);

  const handleEdit = () => {
    setWriteState('update');
    router.push(`/write/${article._id}?category=${article.category}`);
  };

  return (
    <Container>
      <Title>{article.title}</Title>
      <ChipWrapper>
        {article.tags.map((tag) => {
          return <Chip key={tag} label={tag} readOnly />;
        })}
      </ChipWrapper>
      <Wrapper>
        <Date>{convertDateFormat(article.createdAt)}</Date>
        <ButtonsWrapper>
          {/* <Button label="수정" onClick={handleEdit} />
          <Button label="삭제" onClick={handleDelete} /> */}
        </ButtonsWrapper>
      </Wrapper>
    </Container>
  );
};

export default ArticleDetailTitle;

const Container = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 65px;
`;

const ChipWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #494c56;
`;

const Date = styled.time`
  font-weight: 200;
  font-size: 1rem;
  color: #494c56;
`;

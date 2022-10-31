import React from 'react';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';
import Button from 'src/components/ui/Button/Button';
import Chip from 'src/components/ui/Chip/Chip';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { writeStates, detailPageStates } from 'src/recoil/article';

const DetailTitle = () => {
  const router = useRouter();
  const article = useRecoilValue(detailPageStates);
  const setWriteState = useSetRecoilState(writeStates);

  const onClickEdit = () => {
    setWriteState('update');
    router.push(`/write/${article._id}`);
  };

  return (
    <Container>
      <ChipWrapper>
        {article.tags.map((tag) => {
          return <Chip key={tag} label={tag} readOnly />;
        })}
      </ChipWrapper>
      <Title>{article.title}</Title>
      <Wrapper>
        <Date>{article.time}</Date>
        <ButtonsWrapper>
          <Button label="수정" onClick={onClickEdit} />
          ·
          <Button
            label="삭제"
            onClick={() => {
              console.log('삭제버튼');
            }}
          />
        </ButtonsWrapper>
      </Wrapper>
    </Container>
  );
};

export default DetailTitle;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #4a4c55;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 600;
  line-height: 65px;
  margin-bottom: 60px;
`;

const ChipWrapper = styled.div`
  display: flex;
  gap: 8px;
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
  font-size: 16px;
  color: #494c56;
`;

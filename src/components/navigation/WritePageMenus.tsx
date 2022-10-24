import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { openCreateModalStates } from 'src/recoil/permit';

import Button from 'src/components/ui/Button/Button';

const WritePageMenus = () => {
  const setOpen = useSetRecoilState(openCreateModalStates);
  const handleModalOpen = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      <Link href="/" title="메인페이지로 돌아갑니다">
        <A>나가기</A>
      </Link>
      <Button
        primary
        label="게시하기"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      />
    </Wrapper>
  );
};

export default WritePageMenus;

const Wrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const A = styled.a`
  color: #494c56;
  cursor: pointer;
  :hover {
    color: #ffffff;
  }
  transition: 0.2s ease-in-out;
`;

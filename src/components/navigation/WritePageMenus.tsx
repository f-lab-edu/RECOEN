import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'src/components';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { openCreateModalStates } from 'src/recoil/permit';

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
      <Button buttonType="primary" label="게시하기" onClick={handleModalOpen} />
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

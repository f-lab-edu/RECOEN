import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import Button from 'src/components/ui/Button/Button';
import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

const WritePageMenus = () => {
  const handleModalOpen = useHandleOpenModal();

  return (
    <Wrapper>
      <Link href="/" title="메인페이지로 돌아갑니다" passHref>
        <Anchor>나가기</Anchor>
      </Link>
      <Button
        primary
        label="게시하기"
        onClick={() => handleModalOpen('CREATE_ARTICLE')}
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

const Anchor = styled.span`
  color: #494c56;
  cursor: pointer;
  :hover {
    color: #ffffff;
  }
  transition: 0.2s ease-in-out;
`;

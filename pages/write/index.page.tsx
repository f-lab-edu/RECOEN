import React from 'react';
import { useSession } from 'next-auth/react';

import WritePageContainer from 'src/components/container/WritePageContainer';
import MobileWritePage from 'src/components/container/MobileWritePage';
import { useDetectResolution } from 'src/hooks';

import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

const WritePage = () => {
  const handleOpenModal = useHandleOpenModal();
  const resolution = useDetectResolution();
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') handleOpenModal('UNAUTH'); // TODO : 모달 구현방식 리팩토링 한 다음 권한 없음에 대한 모달 다시 띄우기

  if (resolution == 'DESKTOP') return <WritePageContainer />;
  return <MobileWritePage />;
};

export default WritePage;

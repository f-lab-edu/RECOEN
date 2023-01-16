import React from 'react';
import { useSession } from 'next-auth/react';

import WritePageContainer from 'src/components/container/WritePageContainer';
import MobileWritePage from 'src/components/container/MobileWritePage';
import { useDetectResolution } from 'src/hooks';

import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

const WritePage = () => {
  const { data: session, status } = useSession();

  const handleOpenModal = useHandleOpenModal();
  if (status === 'unauthenticated') handleOpenModal('UNAUTH');

  const resolution = useDetectResolution();
  if (resolution == 'DESKTOP') return <WritePageContainer />;
  return <MobileWritePage />;
};

export default WritePage;

import React from 'react';

import { useRecoilValue } from 'recoil';
import { modalState } from 'src/recoil/modal';

import CreateArticleModal from 'src/components/modals/CreateArticleModal/CreateArticleModal';
import LoginModal from 'src/components/modals/LoginModal/LoginModal';

const Modal = () => {
  const modalType = useRecoilValue(modalState);

  const modal = {
    CREATE_ARTICLE: <CreateArticleModal />,
    LOGIN: <LoginModal />,
  };

  if (!modalType) return null;

  return <>{modal[modalType]}</>;
};

export default Modal;

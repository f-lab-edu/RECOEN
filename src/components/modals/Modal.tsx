import React from 'react';

import { useRecoilValue } from 'recoil';
import { modalState } from 'src/recoil/modal';

import CreateArticleModal from 'src/components/modals/create-article-Modal/CreateArticleModal';
import LoginModal from 'src/components/modals/login-modal/LoginModal';
import NavbarModal from 'src/components/modals/navbar-modal/NavbarModal';
import UnAuthModal from 'src/components/modals/unauth-modal/UnAuthModal';

const Modal = () => {
  const modalType = useRecoilValue(modalState);

  const modal = {
    CREATE_ARTICLE: <CreateArticleModal />,
    LOGIN: <LoginModal />,
    UNAUTH: <UnAuthModal />,
    NAVBAR: <NavbarModal />,
  };

  if (!modalType) return null;

  return <>{modal[modalType]}</>;
};

export default Modal;

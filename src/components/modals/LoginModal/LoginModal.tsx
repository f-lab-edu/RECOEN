import React from 'react';
import Modal from '../Modal/Modal';
import styled from '@emotion/styled';
import { theme } from 'src/style';
import { useRouter } from 'next/router';

const LoginModal = () => {
  const router = useRouter();

  return (
    <Modal handleOpenModal={() => router.push('/')}>
      <Container>모달입니다</Container>
    </Modal>
  );
};

export default LoginModal;

const Container = styled.div`
  width: 584px;
  height: 70vh;
  background: ${theme.color.background_2};
`;

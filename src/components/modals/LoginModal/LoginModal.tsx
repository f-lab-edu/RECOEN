import React from 'react';
import Modal from '../Modal/Modal';
import styled from '@emotion/styled';
import { theme } from 'src/style';

interface Props {
  handleOpenModal: () => void;
}

const LoginModal: React.FC<Props> = ({ handleOpenModal }) => {
  return (
    <Modal handleOpenModal={handleOpenModal}>
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

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

interface ModalProps {
  children: React.ReactElement;
  handleOpenModal: () => void;
}

export const Modal = ({ children, handleOpenModal }: ModalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById('modal_root'));
  }, []);

  if (!container) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={handleOpenModal} />
      <Box data-testid="modal">{children}</Box>
    </>,
    container,
  );
};

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background: #161718;
  opacity: 70%;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
  z-index: 100;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252628;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  right: 0%;
  top: 50%;
  transform: translate(0%, -50%);
  width: 432px;
  height: 100vh;
  z-index: 101;
  box-sizing: border-box;
`;

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

interface ModalProps {
  children: React.ReactElement;
}

export const Modal = ({ children }: ModalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById('modal_root'));
  }, []);

  if (!container) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Box>{children}</Box>
    </>,
    container,
  );
};

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background: #ffffff;
  opacity: 50%;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
  z-index: 100;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2e2f31;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 508px;
  z-index: 101;
`;

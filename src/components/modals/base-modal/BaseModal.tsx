import React from 'react';
import styled from '@emotion/styled';

interface ModalProps {
  children: React.ReactElement;
  handleOpenModal: () => void;
  options?: {
    right?: boolean;
    noneOverlay?: boolean;
  };
}

const BaseModal = ({ children, handleOpenModal, options }: ModalProps) => {
  return (
    <>
      <Overlay
        onClick={handleOpenModal}
        data-testid="overlay"
        noneOverlay={options?.noneOverlay}
      />
      <Box data-testid="modal" right={options?.right}>
        {children}
      </Box>
    </>
  );
};

export default BaseModal;

interface StyleProps {
  right?: boolean;
  noneOverlay?: boolean;
}

const Overlay = styled.div<StyleProps>`
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
  cursor: pointer;
  display: ${({ noneOverlay }) => noneOverlay && 'none'};
`;

const rightStyle = `
right: 0%;
top: 50%;
transform: translate(0%, -50%);
`;

const centerStyle = `
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;

const Box = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  z-index: 101;
  box-sizing: border-box;
  ${({ right }) => (right ? rightStyle : centerStyle)}
`;

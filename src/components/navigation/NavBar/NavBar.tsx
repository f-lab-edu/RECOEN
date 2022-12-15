import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import { theme } from 'src/style';

import Menus from '../Menus/Menus';
import WritePageMenus from '../WritePageMenus/WritePageMenus';
import HamburgerMenu from '../../../../public/hamburger.png';
import xImage from '../../../../public/x-3.png';

import { useResolution } from 'src/hooks/useResolution';
import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

import { useRecoilValue } from 'recoil';
import { modalState } from 'src/recoil/modal';

const NavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const resolution = useResolution();
  const handleOpenModal = useHandleOpenModal();
  const modalType = useRecoilValue(modalState);

  const resolvePosition = () => {
    const pathname = router.pathname;
    if (pathname == '/programming/[id]' || pathname == '/book/[id]')
      return 'position: absolute';
    if (pathname.includes('/write')) return 'position: relative';
    return 'position:fixed';
  };

  const resolveBackground = () => {
    if (pathname == '/article/[id]')
      return `background: ${theme.color.bluredBlack};`;
    return null;
  };

  const resolveMenuBar = () => {
    if (pathname.includes('/write')) return <WritePageMenus />;
    else return <Menus />;
  };

  return (
    <FixedContainer
      data-testid="fixedContainer"
      position={resolvePosition()}
      background={resolveBackground()}
    >
      <Container>
        <Link href="/">
          <Title lang="en">recoen.</Title>
        </Link>
        {resolution !== 'MOBILE' ? (
          resolveMenuBar()
        ) : modalType == null ? (
          <Link href={`${pathname}?isModal=true`}>
            <BurgerImage
              src={HamburgerMenu}
              alt="hamburger menu"
              width={20}
              height={20}
              onClick={() => handleOpenModal('NAVBAR')}
            />
          </Link>
        ) : (
          <Link href={`${pathname}`}>
            <XImage
              src={xImage}
              alt="remove navbar modal"
              width={20}
              height={20}
              onClick={() => handleOpenModal(null)}
            />
          </Link>
        )}
      </Container>
    </FixedContainer>
  );
};

export default NavBar;

interface StyleProps {
  position?: string;
  background?: string | null;
}

const BurgerImage = styled(Image)`
  cursor: pointer;
`;

const XImage = styled(Image)`
  cursor: pointer;
`;

const FixedContainer = styled.div<StyleProps>`
  ${({ position }) => position};
  ${({ background }) => background};
  width: 100vw;
  z-index: 99;
  border-bottom: 1px solid rgba(74, 76, 85, 0.3);
`;

const Container = styled.header`
  max-width: 1260px;
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 30px 0 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

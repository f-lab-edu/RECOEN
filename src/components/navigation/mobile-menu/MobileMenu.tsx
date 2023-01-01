import Link from 'next/link';
import styled from '@emotion/styled';
import Image from 'next/image';

import { useRecoilValue } from 'recoil';
import { modalState } from 'src/recoil/modal';
import { useRouter } from 'next/router';
import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';
import { getPathname } from 'src/utils';

import xImage from '../../../../public/x-3.png';
import HamburgerMenu from '../../../../public/hamburger.png';

const MobileMenu = () => {
  const modalType = useRecoilValue(modalState);
  const router = useRouter();
  const handleOpenModal = useHandleOpenModal();

  if (modalType == null) {
    return (
      <Link href={`${router.asPath}?isModal=true`}>
        <BurgerImage
          src={HamburgerMenu}
          alt="hamburger menu"
          width={20}
          height={20}
          onClick={() => handleOpenModal('NAVBAR')}
        />
      </Link>
    );
  }
  return (
    <Link href={`${getPathname(router.pathname)(router.query)}`}>
      <XImage
        src={xImage}
        alt="remove navbar modal"
        width={20}
        height={20}
        onClick={() => handleOpenModal(null)}
      />
    </Link>
  );
};

export default MobileMenu;

const BurgerImage = styled(Image)`
  cursor: pointer;
`;

const XImage = styled(Image)`
  cursor: pointer;
`;

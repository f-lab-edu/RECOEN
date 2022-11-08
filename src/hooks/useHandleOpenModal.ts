import { useSetRecoilState } from 'recoil';
import { modalState } from 'src/recoil/modal';
import { ModalType } from 'src/types/modal';

export const useHandleOpenModal = () => {
  const setModalType = useSetRecoilState(modalState);

  const handleOpenModal = (modalType: ModalType) => {
    setModalType(modalType);
  };

  return handleOpenModal;
};

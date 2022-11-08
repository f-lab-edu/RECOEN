import { atom } from 'recoil';
import { ModalType } from 'src/types/modal';

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    modalType: null,
  },
});

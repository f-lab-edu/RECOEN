import { atom } from 'recoil';

export const openCreateModalState = atom({
  key: 'openCreateModalState',
  default: false,
});

export const openLoginModalState = atom({
  key: 'openLoginModalState',
  default: false,
});

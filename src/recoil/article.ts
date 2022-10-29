import { atom } from 'recoil';

export const ArticleStates = atom({
  key: 'articleStates',
  default: {
    title: '',
    content: '',
    tags: [''],
    description: '',
    imgUrl: '',
  },
});

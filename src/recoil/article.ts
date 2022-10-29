import { atom } from 'recoil';
import { ArticleElements } from 'src/types/article';
export const articleState = atom<ArticleElements>({
  key: 'articleState',
  default: {
    title: '',
    content: '',
    tags: [],
    description: '',
    imgUrl: '',
    time: '2022.10.23 · 7min read',
  },
});

export const detailPageState = atom<ArticleElements>({
  key: 'detailPageState',
  default: {
    _id: '',
    title: '',
    content: '',
    tags: [],
    description: '',
    imgUrl: '',
    time: '2022.10.23 · 7min read',
  },
});

export const writeStates = atom<'create' | 'update'>({
  key: 'writeStates',
  default: 'create',
});

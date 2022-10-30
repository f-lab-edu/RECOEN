import { atom } from 'recoil';
import { ArticleElements } from 'src/types/article';
export const articleStates = atom<ArticleElements>({
  key: 'articleStates',
  default: {
    title: '',
    content: '',
    tags: [],
    description: '',
    imgUrl: undefined,
    time: '2022.10.23 · 7min read',
  },
});

export const writeStates = atom<'create' | 'update'>({
  key: 'writeStates',
  default: 'create',
});

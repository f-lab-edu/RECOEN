import { atom } from 'recoil';
import { ArticleElements } from 'src/types/article';
export const articleStates = atom<ArticleElements>({
  key: 'articleStates',
  default: {
    title: '',
    content: '',
    tags: [],
    description: '',
    imgUrl: null,
  },
});

export const writeStates = atom<'create' | 'update'>({
  key: 'writeStates',
  default: 'create',
});

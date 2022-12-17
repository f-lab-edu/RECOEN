import { atom, selector } from 'recoil';
import { isObjectEmpty } from 'src/utils/isObjectEmpty';
import { ArticleElement, ViewArticleElement } from 'src/types/article';

export const articleState = atom<ArticleElement>({
  key: 'articleState',
  default: {
    title: '',
    content: '',
    tags: [],
    description: '',
    imgUrl: '',
    createdAt: '',
    category: 'programming',
  },
});

export const articleListStates = atom<ViewArticleElement[]>({
  key: 'articleListStates',
  default: [],
});

export const filteredArticleStates = atom<ViewArticleElement[]>({
  key: 'filteredArticleStates',
  default: [],
});

export const detailPageState = atom<ViewArticleElement>({
  key: 'detailPageState',
  default: {
    _id: '',
    title: '',
    content: '',
    tags: [],
    description: '',
    imgUrl: '',
    createdAt: '',
    blurDataURL: '',
    category: 'programming',
  },
});

export const writeStates = atom<'create' | 'update'>({
  key: 'writeStates',
  default: 'create',
});

export const articleValidationState = selector<boolean>({
  key: 'articleValidationState',
  get: ({ get }) => {
    const article = get(articleState);
    const isEmpty = isObjectEmpty(article);
    return isEmpty;
  },
});

export const tagStates = atom<string[]>({
  key: 'tagState',
  default: [],
});

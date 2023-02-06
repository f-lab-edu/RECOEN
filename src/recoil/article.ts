import { atom, selector } from 'recoil';
import { isAnyPropertyEmpty } from 'src/utils/isAnyPropertyEmpty';
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

export const writeStatus = atom<'create' | 'update'>({
  key: 'writeStatus',
  default: 'create',
});

export const articleValidationFirstStep = selector<boolean>({
  key: 'articleValidationFirstStep',
  get: ({ get }) => {
    const { title, content } = get(articleState);
    const firstObject = { title, content };
    const isEmpty = isAnyPropertyEmpty(firstObject);
    return isEmpty;
  },
});

export const articleValidationSecondStep = selector<boolean>({
  key: 'articleValidationSecondStep',
  get: ({ get }) => {
    const { imgUrl, tags, description } = get(articleState);
    const secondObject = { imgUrl, tags, description };
    const isEmpty = isAnyPropertyEmpty(secondObject);
    return isEmpty;
  },
});

export const tagStates = atom<string[]>({
  key: 'tagState',
  default: [],
});

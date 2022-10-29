import { atom } from 'recoil';
import { CreateArticleElements } from 'src/types/article';
export const ArticleStates = atom<CreateArticleElements>({
  key: 'articleStates',
  default: {
    title: '',
    content: '',
    tags: [],
    description: '',
    imgUrl: '',
  },
});

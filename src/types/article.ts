import { AxiosResponse } from 'axios';

export interface ArticleElement {
  status?: number;
  _id?: string;
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  content: string;
  createdAt?: string;
  category: ArticleCategory;
}
export interface ViewArticleElement extends ArticleElement {
  blurDataURL: string;
  createdAt: string;
}

export type UseArticleElement = () => Return;

type Return = {
  articleElements: ArticleElement;
  setArticleElement: HandleArticleElementFunction;
};

export type HandleArticleElementFunction = (
  arg: Partial<ArticleElement>,
) => void;

export type SaveArticleFunction = (
  data: ArticleElements,
) => (category: ArticleCategory) => Promise<AxiosResponse<any, any>>;

export type ArticleCategory = 'programming' | 'book' | 'essay';

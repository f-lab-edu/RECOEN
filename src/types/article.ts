import { AxiosResponse } from 'axios';

export interface ArticleModel {
  title: string;
  description: string;
  tags: string[];
  content: string;
  imgUrl: string;
  category: ArticleCategory;
}

export interface TempArticleElement {
  // 타입을 분리하는게 좋을 것 같아요 중복되는게 많아서 이렇게 한것 같은데 분리하는게 명확합니다.
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  content: string;
  category: ArticleCategory;
}
export interface ArticleElement {
  status: number;
  _id: string;
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  content: string;
  createdAt: string;
  category: ArticleCategory;
}
export interface ViewArticleElement extends ArticleElement {
  blurDataURL: string;
  createdAt: string;
}

export type UseArticleElement = () => Return;
// 자동 타입 추론이 되는데 왜 만들었는지 궁금해요. 굳이 안만들어도 될 것 같아요
type Return = {
  articleElements: ArticleElement;
  setArticleElement: HandleArticleElementFunction;
};

export type HandleArticleElementFunction = (
  arg: Partial<ArticleElement>,
) => void;

export type SaveArticleFunction = (
  category: ArticleCategory,
) => (data: ArticleElement) => Promise<AxiosResponse<any, any>>;

export type ArticleCategory = 'programming' | 'book';

import { AxiosResponse } from 'axios';

export interface ArticleElements {
  status?: number;
  _id?: string;
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  content: string;
  time?: string;
}
export interface ArticleElementsType extends ArticleElements {
  blurDataURL: string;
  time: string;
}

export type SaveArticleFunction = (
  data: ArticleElements,
) => Promise<AxiosResponse<any, any>>;

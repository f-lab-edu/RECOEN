import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { AxiosResponse } from 'axios';

export interface ArticleElements {
  status?: number;
  _id?: string;
  title: string;
  description: string;
  tags: string[];
  imgUrl: string | undefined;
  content: string | MDXRemoteSerializeResult;
  time?: string;
}
export interface ArticleElementsType extends ArticleElements {
  blurDataURL: string;
  time: string;
}

export type SaveArticleFunction = (
  data: ArticleElements,
) => Promise<AxiosResponse<any, any>>;

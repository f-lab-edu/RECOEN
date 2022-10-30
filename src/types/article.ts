import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface CreateArticleElements {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string | null;
  content: string | MDXRemoteSerializeResult;
}
export interface ArticleElementsType extends CreateArticleElements {
  _id: string;
  blurDataURL: string;
  time: string;
}

export interface UpdateArticleElements extends CreateArticleElements {
  _id: string;
}

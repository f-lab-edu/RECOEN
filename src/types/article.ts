import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export type ArticleElementsType = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  content: string | MDXRemoteSerializeResult;
  imgUrl: string | null;
  blurDataURL: string;
  time: string;
};

export type CreateArticleElements = {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string | null;
  content: string;
};

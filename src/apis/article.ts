import { axiosInstance } from './index';
import { ArticleElement } from 'src/types/article';
export const PROGRAMMING_ARTICLE_URI = '/api/programming';
export const BOOK_ARTICLE_URI = '/api/book';
export const ESSAY_ARTICLE_URI = '/api/essay';
export const ARTICLE_URI = '/api/article';

export const uriMap = {
  programming: PROGRAMMING_ARTICLE_URI,
  book: BOOK_ARTICLE_URI,
  essay: ESSAY_ARTICLE_URI,
};

export const createArticle = async (data: ArticleElement) => {
  return await axiosInstance.post(ARTICLE_URI, data);
};

export const updateArticle = async (data: ArticleElement) => {
  return await axiosInstance.put(ARTICLE_URI, data);
};

export const deleteArticle = async (id: string) => {
  const config = { data: { id } };
  return await axiosInstance.delete(ARTICLE_URI, config);
};

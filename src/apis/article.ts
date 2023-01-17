import { axiosInstance } from './index';
import { ArticleElement, ArticleCategory } from 'src/types/article';
export const PROGRAMMING_ARTICLE_URI = '/api/programming';
export const BOOK_ARTICLE_URI = '/api/book';
export const ESSAY_ARTICLE_URI = '/api/essay';

export const uriMap = {
  programming: PROGRAMMING_ARTICLE_URI,
  book: BOOK_ARTICLE_URI,
  essay: ESSAY_ARTICLE_URI,
};

export const createArticle =
  (data: ArticleElement) => async (category: ArticleCategory) => {
    return await axiosInstance.post(uriMap[category], data);
  };

export const updateArticle =
  (data: ArticleElement) => async (category: ArticleCategory) => {
    return await axiosInstance.put(uriMap[category], data);
  };

export const deleteArticle =
  (category: ArticleCategory) => async (id: string) => {
    const config = { data: { id } };
    return await axiosInstance.delete(uriMap[category], config);
  };

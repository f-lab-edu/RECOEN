import { axiosInstance } from './index';
import { ArticleElements, ArticleCategory } from 'src/types/article';
export const PROGRAMMING_ARTICLE_URI = '/api/programming';
export const BOOK_ARTICLE_URI = '/api/book';
export const ESSAY_ARTICLE_URI = '/api/essay';
const ARTICLES_URI = '/api/articles';

const uriMap = {
  programming: PROGRAMMING_ARTICLE_URI,
  book: BOOK_ARTICLE_URI,
  essay: ESSAY_ARTICLE_URI,
};

export const getArticle = async (id: string) => {
  return await axiosInstance.get(PROGRAMMING_ARTICLE_URI, { data: id });
};

export const getArticles = async () => {
  return await axiosInstance.get(ARTICLES_URI);
};

export const createArticle =
  (data: ArticleElements) => async (category: ArticleCategory) => {
    return await axiosInstance.post(uriMap[category], data);
  };

export const updateArticle =
  (data: ArticleElements) => async (category: ArticleCategory) => {
    return await axiosInstance.put(uriMap[category], data);
  };

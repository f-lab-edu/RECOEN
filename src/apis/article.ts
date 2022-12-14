import { axiosInstance } from './index';
import { ArticleElement, ArticleCategory } from 'src/types/article';
export const PROGRAMMING_ARTICLE_URI = '/api/article/programming';
export const BOOK_ARTICLE_URI = '/api/article/book';
export const ESSAY_ARTICLE_URI = '/api/article/essay';
const ARTICLES_URI = '/api/articles';

export const uriMap = {
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
  (category: ArticleCategory) => async (data: ArticleElement) => {
    return await axiosInstance.post(uriMap[category], data);
  };

export const createBookArticle = createArticle('book');
export const createProgrammingArticle = createArticle('programming');

export const updateArticle =
  (data: ArticleElement) => async (category: ArticleCategory) => {
    return await axiosInstance.put(uriMap[category], data);
  };

// deleteArticle도 여기로 옮겨주세요.
// uriMap 필요없는 것 같아요.
// 타입별로 query 때려서 받아와야함.

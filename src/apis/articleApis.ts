import { axiosInstance } from './index';
import { ArticleElements } from 'src/types/article';
export const CODING_ARTICLE_URI = '/api/programming';
const ARTICLES_URI = '/api/articles';

export const getArticle = async (id: string) => {
  return await axiosInstance.get(CODING_ARTICLE_URI, { data: id });
};

export const getArticles = async () => {
  return await axiosInstance.get(ARTICLES_URI);
};

export const createArticle = async (data: ArticleElement) => {
  return await axiosInstance.post(ARTICLE_URI, data);
};

export const updateArticle = async (data: ArticleElement) => {
  return await axiosInstance.put(ARTICLE_URI, data);
};

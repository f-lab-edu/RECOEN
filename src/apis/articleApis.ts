import { axiosInstance } from './index';
import {
  CreateArticleElements,
  UpdateArticleElements,
} from 'src/types/article';
const ARTICLE_URI = '/api/article';
const ARTICLES_URI = '/api/articles';

export const getArticle = async (id: string) => {
  return await axiosInstance.get(ARTICLE_URI, { data: id });
};

export const getArticles = async () => {
  return await axiosInstance.get(ARTICLES_URI);
};

export const createArticle = async (data: CreateArticleElements) => {
  return await axiosInstance.post(ARTICLE_URI, data);
};

export const updateArticle = async (data: UpdateArticleElements) => {
  return await axiosInstance.put(ARTICLE_URI, data);
};

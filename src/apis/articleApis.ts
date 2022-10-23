import { axiosInstance } from './index';

const ARTICLE_URI = '/api/article';
const ARTICLES_URI = '/api/articles';

interface CreateArticleParameter {
  title?: string;
  description?: string;
  tags?: string[];
  content?: string;
  imgUrl?: string;
}

export const getArticle = async (id: string) => {
  return await axiosInstance.get(ARTICLE_URI, { data: id });
};

export const getArticles = async () => {
  return await axiosInstance.get(ARTICLES_URI);
};

export const createArticle = async (data: CreateArticleParameter) => {
  return await axiosInstance.post(ARTICLE_URI, data);
};

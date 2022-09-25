import { client } from './index';

const ARTICLE_URI = '/api/article';
const ARTICLES_URI = '/api/articles';

export const getArticle = async (id: string) => {
  return await client.get(ARTICLE_URI, { data: id });
};

export const getArticles = async () => {
  return await client.get(ARTICLES_URI);
};

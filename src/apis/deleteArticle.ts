import { axiosInstance } from './index';
import { ARTICLE_URI } from './index';

export const deleteArticle = async (id: string) => {
  const config = { data: { id } };
  return await axiosInstance.delete(ARTICLE_URI, config);
};

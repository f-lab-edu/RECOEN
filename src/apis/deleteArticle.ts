import { axiosInstance } from './index';
import { uriMap } from './index';
import { ArticleCategory } from 'src/types/article';

export const deleteArticle =
  (category: ArticleCategory) => async (id: string) => {
    const config = { data: { id } };
    return await axiosInstance.delete(uriMap[category], config);
  };

// 요것도 없애면 좋을 것 같아요

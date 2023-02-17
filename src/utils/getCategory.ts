import { ViewArticleElement } from 'src/types/article';

export const getCategory = (list: ViewArticleElement[]) => {
  return list[0].category;
};

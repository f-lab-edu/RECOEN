import { useSetRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { articleListStates, filteredArticleStates } from 'src/recoil/article';

import { filterArticles } from 'src/utils/filterArticles';

export const useFilterArticle = () => {
  const articleList = useRecoilValue(articleListStates);
  const setFilteredArticleList = useSetRecoilState(filteredArticleStates);
  const resetFilteredArticleList = useResetRecoilState(filteredArticleStates);

  const filterArticle = (selectedTag: string | null) => {
    if (!selectedTag) return resetFilteredArticleList();

    const filteredList = filterArticles(articleList)(selectedTag);

    setFilteredArticleList(filteredList);
  };

  return filterArticle;
};

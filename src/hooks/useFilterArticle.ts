import { useSetRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { articleListStates, filteredArticleStates } from 'src/recoil/article';
import { ViewArticleElement } from 'src/types/article';

import curry from 'ramda/src/curry';
import includes from 'ramda/src/includes';
import filter from 'ramda/src/filter';

const filterArticles = curry(
  (articles: ViewArticleElement[], selectedTag: string) =>
    filter((article) => includes(selectedTag, article.tags), articles),
);

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

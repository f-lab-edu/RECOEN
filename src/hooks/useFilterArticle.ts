import { useSetRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { articleListStates, filteredArticleStates } from 'src/recoil/article';
import { pipe, toArray, filter, curry } from '@fxts/core';
import { ViewArticleElement } from 'src/types/article';

const filterArticles = curry(
  (articles: ViewArticleElement[], selectedTag: string) => {
    return pipe(
      articles,
      filter((article) => article.tags.includes(selectedTag)),
      toArray,
    );
  },
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

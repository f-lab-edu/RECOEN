import { useSetRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { articleListStates, filteredArticleStates } from 'src/recoil/article';
import { pipe, toArray, filter, curry } from '@fxts/core';
import { ArticleElementsType } from 'src/types/article';

const filterArticles = curry(
  (articles: ArticleElementsType[], selectedTag: string) => {
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

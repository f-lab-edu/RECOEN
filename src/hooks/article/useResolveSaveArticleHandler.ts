import { useRecoilValue } from 'recoil';
import { articleState, writeStates } from 'src/recoil/article';

import { SaveArticleFunction, ArticleElement } from 'src/types/article';
import { createArticle, updateArticle } from 'src/apis';
import { useHandleSuccess } from './useHandleSuccess';

export const useResolveSaveArticleHandler = () => {
  const articleElements = useRecoilValue(articleState);
  const handleSuccess = useHandleSuccess(articleElements.category);
  const writeState = useRecoilValue(writeStates);

  const makeSaveArticleHandler =
    (articleElements: ArticleElement, handleSuccess: () => void) =>
    async (saveArticleFunction: SaveArticleFunction) => {
      const res = await saveArticleFunction(articleElements);

      if (res.status == 200) handleSuccess();
    };

  const handleSaveArticle = makeSaveArticleHandler(
    articleElements,
    handleSuccess,
  );

  const handleArticleSave = () => {
    if (writeState === 'create') return handleSaveArticle(createArticle);
    if (writeState === 'update') return handleSaveArticle(updateArticle);
  };

  return handleArticleSave;
};

import { useRecoilValue } from 'recoil';
import { articleState, writeStates } from 'src/recoil/article';

import { SaveArticleFunction, ArticleElement } from 'src/types/article';
import { createArticle, updateArticle } from 'src/apis';
import { useHandleSuccess } from './useHandleSuccess';

export const useResolveSaveFunction = () => {
  const articleElements = useRecoilValue(articleState);
  const handleSuccess = useHandleSuccess(articleElements.category);
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

  const writeState = useRecoilValue(writeStates);

  const handleArticleMap = {
    create: handleSaveArticle(createArticle),
    update: handleSaveArticle(updateArticle),
  };

  return handleArticleMap[writeState];
};

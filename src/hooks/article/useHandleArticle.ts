import { useRecoilValue } from 'recoil';
import { articleState, writeStates } from 'src/recoil/article';

import { SaveArticleFunction, ArticleElement } from 'src/types/article';
import { createArticle, updateArticle } from 'src/apis';
import { useHandleSuccess } from './useHandleSuccess';

const saveArticle =
  (articleElements: ArticleElement) =>
  (handleSuccess: () => void) =>
  async (saveArticleFunction: SaveArticleFunction) => {
    const res = await saveArticleFunction(articleElements);

    if (res.status == 200) handleSuccess();
  };

export const useSaveArticle = () => {
  const articleElements = useRecoilValue(articleState);
  const handleSuccess = useHandleSuccess(articleElements.category);

  const handleSaveArticle = saveArticle(articleElements)(handleSuccess);

  return handleSaveArticle;
};

export const useResolveSaveFunction = () => {
  const saveArticle = useSaveArticle();
  const writeState = useRecoilValue(writeStates);

  const handleSaveArticle = () => {
    if (writeState == 'create') saveArticle(createArticle);
    if (writeState == 'update') saveArticle(updateArticle);
  };

  return handleSaveArticle;
};

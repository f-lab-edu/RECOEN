import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { articleState, writeStates, detailPageState } from 'src/recoil/article';
import { modalState } from 'src/recoil/modal';

import {
  SaveArticleFunction,
  ArticleElement,
  UseArticleElement,
  HandleArticleElementFunction,
  ArticleCategory,
} from 'src/types/article';

import { createArticle, updateArticle, deleteArticle } from 'src/apis';

export const useArticleElement: UseArticleElement = () => {
  const [articleElements, setElement] = useRecoilState(articleState);

  const setArticleElement: HandleArticleElementFunction = (element) => {
    setElement({ ...articleElements, ...element });
  };

  return { articleElements, setArticleElement };
};

const useHandleSuccess = (category: ArticleCategory) => {
  const resetArticle = useResetRecoilState(articleState);
  const resetModalState = useResetRecoilState(modalState);

  const router = useRouter();

  return () => {
    router.push(`/${category}`);

    resetArticle();
    resetModalState();
  };
};

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

export const useHandleDelete = (category: ArticleCategory) => {
  const detailArticle = useRecoilValue(detailPageState);
  const router = useRouter();

  const handleDelete = async () => {
    if (!detailArticle._id) return;

    await deleteArticle(detailArticle._id);
    return router.push(`/${category}`);
  };

  return handleDelete;
};

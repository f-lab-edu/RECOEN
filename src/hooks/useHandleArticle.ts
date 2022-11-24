import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { articleState, writeStates, detailPageState } from 'src/recoil/article';
import { modalState } from 'src/recoil/modal';

import { SaveArticleFunction, ArticleElements } from 'src/types/article';

import { createArticle, updateArticle, deleteArticle } from 'src/apis';

export const useArticleElement = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleState);

  const setArticleElement = (element: Partial<ArticleElements>) => {
    setArticleElements({ ...articleElements, ...element });
  };

  return { articleElements, setArticleElement };
};

const useHandleSuccess = () => {
  const resetArticle = useResetRecoilState(articleState);
  const resetModalState = useResetRecoilState(modalState);

  const router = useRouter();

  return () => {
    router.push('/article');

    resetArticle();
    resetModalState();
  };
};

const saveArticle =
  (articleElements: ArticleElements) =>
  (handleSuccess: () => void) =>
  async (saveArticleFunction: SaveArticleFunction) => {
    const res = await saveArticleFunction(articleElements);

    if (res.status == 200) handleSuccess();
  };

export const useSaveArticle = () => {
  const articleElements = useRecoilValue(articleState);
  const handleSuccess = useHandleSuccess();

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

export const useHandleDelete = () => {
  const detailArticle = useRecoilValue(detailPageState);
  const router = useRouter();

  const handleDelete = async () => {
    if (!detailArticle._id) return;

    await deleteArticle(detailArticle._id);
    return router.push('/article');
  };

  return handleDelete;
};

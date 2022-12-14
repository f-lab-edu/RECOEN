import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { articleState, writeStates, detailPageState } from 'src/recoil/article';
import { modalState } from 'src/recoil/modal';

import {
  SaveArticleFunction,
  ArticleElement,
  ArticleCategory,
} from 'src/types/article';

import { createArticle, updateArticle, deleteArticle } from 'src/apis';

export const useArticleElement = () => {
  // 요건 필요없는것 같아요. 그냥 useRecoilState 쓰는게 더 좋을 것 같아요
  // 인터페이스만 사용하고 있기 때문에. 컴포넌트들이 인터페이스에만 의존하고 있어서 useArticleElement에 변경사항이 생겨도 컴포넌트에서 변경
  // 전부다는 아니지만 웬만하면 사용할 것 같다.
  // 한곳은 아니지만 두 군데 이상에서 사용하면 이렇게 hook으로 만들 것 같다.
  const [articleElements, setElement] = useRecoilState(articleState);

  const setArticleElement = (element: Partial<ArticleElement>) => {
    setElement({ ...articleElements, ...element });
  }; // 변수명은 바꾸는게 좋을 것 같아요. setElement는 recoil의 setElement를 의미하는 것 같아요.

  return { articleElements, setElement };
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
    const res = await saveArticleFunction(articleElements.category)(
      articleElements,
    );

    if (res.status == 200) handleSuccess();
  };

const useSaveArticle = () => {
  const articleElements = useRecoilValue(articleState);
  const handleSuccess = useHandleSuccess(articleElements.category);

  const handleSaveArticle = saveArticle(articleElements)(handleSuccess);

  return handleSaveArticle;
};
// 쉬운걸 어렵게 만든것 같아요 https://yozm.wishket.com/magazine/detail/1769/ 한 번 읽어보세요.
export const useResolveSaveFunction = () => {
  const saveArticle = useSaveArticle(); // 변수명이 잘못된것 같아요.
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

    await deleteArticle(category)(detailArticle._id);
    return router.push(`/${category}`);
  };

  return handleDelete;
};

import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { articleStates, writeStates } from 'src/recoil/article';
import { openCreateModalStates } from 'src/recoil/permit';

import { SaveArticleFunction, ArticleElements } from 'src/types/article';

import { createArticle, updateArticle } from 'src/apis';

export const useTitle = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleStates);

  const setArticleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleElements({ ...articleElements, title: event.target.value });
  };

  return { title: articleElements.title, setArticleTitle };
};

export const useContent = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleStates);

  const setMarkDown = (markdown: string) => {
    setArticleElements({ ...articleElements, content: markdown });
  };

  return { content: articleElements.content, setMarkDown };
};

export const useTags = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleStates);
  const setTags = (tags: string[]) => {
    setArticleElements({ ...articleElements, tags });
  };
  return { tags: articleElements.tags, setTags };
};

export const useDescription = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleStates);

  const setDesc = (description: string) => {
    setArticleElements({ ...articleElements, description });
  };
  return { desc: articleElements.description, setDesc };
};

export const useImageUrl = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleStates);

  const setUrl = (imgUrl: string) => {
    setArticleElements({ ...articleElements, imgUrl });
  };

  return { imgUrl: articleElements.imgUrl, setUrl };
};

const useHandleSuccess = () => {
  const resetArticle = useResetRecoilState(articleStates);
  const resetModalState = useResetRecoilState(openCreateModalStates);

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
  const articleElements = useRecoilValue(articleStates);
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

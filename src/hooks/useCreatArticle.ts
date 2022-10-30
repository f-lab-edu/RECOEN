import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { createArticle } from 'src/apis';

import { articleStates } from 'src/recoil/article';
import { openCreateModalStates } from 'src/recoil/permit';

export const useTitle = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleStates);

  const setArticleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleElements({ ...articleElements, title: event.target.value });
  };

  return { articleElements, setArticleTitle };
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

export const useSaveArticle = () => {
  const articleElements = useRecoilValue(articleStates);
  const resetArticle = useResetRecoilState(articleStates);
  const resetModalState = useResetRecoilState(openCreateModalStates);
  const router = useRouter();

  const handleCreateArticle = async () => {
    const res = await createArticle(articleElements);

    if (res.status == 200) {
      router.push('/article');
      resetArticle();
      resetModalState();
    }
  };

  return handleCreateArticle;
};

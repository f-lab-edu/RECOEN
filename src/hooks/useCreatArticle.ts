import React from 'react';
import { articleStates } from 'src/recoil/article';
import { useRecoilState } from 'recoil';

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
  return { setDesc };
};

export const useImageUrl = () => {
  const [articleElements, setArticleElements] = useRecoilState(articleStates);
  const setUrl = (imgUrl: string) => {
    setArticleElements({ ...articleElements, imgUrl });
  };
  return { setUrl };
};

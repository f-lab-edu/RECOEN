import React from 'react';
import { ArticleStates } from 'src/recoil/article';
import { useRecoilState } from 'recoil';

export const useTitle = () => {
  const [articleElements, setArticleElements] = useRecoilState(ArticleStates);
  const setArticleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleElements({ ...articleElements, title: event.target.value });
  };
  return { articleElements, setArticleTitle };
};

export const useContent = () => {
  const [articleElements, setArticleElements] = useRecoilState(ArticleStates);
  const setMarkDown = (markdown: string) => {
    setArticleElements({ ...articleElements, content: markdown });
  };
  return { setMarkDown };
};

export const useTags = () => {
  const [articleElements, setArticleElements] = useRecoilState(ArticleStates);
  const setTags = (tags: string[]) => {
    setArticleElements({ ...articleElements, tags });
  };
  return { tags: articleElements.tags, setTags };
};

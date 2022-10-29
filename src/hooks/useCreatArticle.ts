import React, { useState, useEffect, useMemo } from 'react';
import { ArticleStates } from 'src/recoil/article';
import { useRecoilState } from 'recoil';

export const useTitle = () => {
  const [articleElements, setArticleElements] = useRecoilState(ArticleStates);
  const setArticleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleElements({ ...articleElements, title: event.target.value });
  };
  return { articleElements, setArticleTitle };
};

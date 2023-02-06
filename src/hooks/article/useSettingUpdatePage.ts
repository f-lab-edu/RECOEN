import { useEffect } from 'react';
import { ViewArticleElement } from 'src/types/article';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { articleState, writeStatus } from 'src/recoil/article';
import { useRouter } from 'next/router';

export const useSettingUpdatePage = (article: ViewArticleElement) => {
  const setArticle = useSetRecoilState(articleState);
  const setWriteStatus = useSetRecoilState(writeStatus);
  const resetDetailStates = useResetRecoilState(articleState);
  const { query } = useRouter();

  useEffect(() => {
    const articleState = {
      _id: article._id,
      title: article.title,
      content: article.content,
      imgUrl: article.imgUrl,
      description: article.description,
      tags: article.tags,
      category: article.category,
    };
    setArticle(articleState);

    if (query.type !== 'update') return;
    setWriteStatus(query.type);

    return () => resetDetailStates();
  }, []);
};

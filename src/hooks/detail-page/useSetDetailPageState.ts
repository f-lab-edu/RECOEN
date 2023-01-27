import { useEffect } from 'react';
import { ViewArticleElement } from 'src/types/article';
import { useSetRecoilState } from 'recoil';
import { detailPageState } from 'src/recoil/article';

export const useSetDetailPageState = (article: ViewArticleElement) => {
  const setDetailStates = useSetRecoilState(detailPageState);
  useEffect(() => {
    const detailStates: ViewArticleElement = {
      _id: article._id,
      title: article.title,
      content: article.content,
      imgUrl: article.imgUrl,
      description: article.description,
      tags: article.tags,
      createdAt: article.createdAt,
      blurDataURL: article.blurDataURL,
      category: article.category,
    };
    setDetailStates(detailStates);
  }, []);
};

import { useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { articleState } from 'src/recoil/article';
import { modalState } from 'src/recoil/modal';

import { ArticleCategory } from 'src/types/article';

export const useHandleSuccess = (category: ArticleCategory) => {
  const resetArticle = useResetRecoilState(articleState);
  const resetModalState = useResetRecoilState(modalState);

  const router = useRouter();

  return () => {
    router.push(`/${category}`);

    resetArticle();
    resetModalState();
  };
};

import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import { detailPageState } from 'src/recoil/article';
import { ArticleCategory } from 'src/types/article';
import { deleteArticle } from 'src/apis';

export const useHandleDelete = (category: ArticleCategory) => {
  const detailArticle = useRecoilValue(detailPageState);
  const router = useRouter();

  const handleDelete = async () => {
    if (!detailArticle._id) return;

    await deleteArticle(detailArticle._id);
    return router.push(`/${category}`);
  };

  return handleDelete;
};

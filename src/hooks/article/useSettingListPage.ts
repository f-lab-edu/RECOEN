import { useEffect } from 'react';
import { ViewArticleElement } from 'src/types/article';
import { useSetRecoilState } from 'recoil';
import { articleListStates } from 'src/recoil/article';

export const useSettingListPage = (article: ViewArticleElement[]) => {
  const setArticleList = useSetRecoilState(articleListStates);
  useEffect(() => {
    setArticleList(article);
  }, []);
};

import { useRecoilState } from 'recoil';
import { articleState } from 'src/recoil/article';

import {
  UseArticleElement,
  HandleArticleElementFunction,
} from 'src/types/article';

export const useArticleElement: UseArticleElement = () => {
  const [articleElements, setElement] = useRecoilState(articleState);

  const setArticleElement: HandleArticleElementFunction = (element) => {
    setElement({ ...articleElements, ...element });
  };

  return { articleElements, setArticleElement };
};

import { ViewArticleElement } from 'src/types/article';
import { useSetDetailPageState } from './useSetDetailPageState';
import { useResetDetailPageState } from './useResetDetailPageState';

export const useSettingDetailPage = (article: ViewArticleElement) => {
  useSetDetailPageState(article);
  useResetDetailPageState();
};

import { renderHook } from '@testing-library/react';
import { useTitle } from '../useCreatArticle';
import { RecoilRoot } from 'recoil';

describe('useTitle', () => {
  describe('초기값은', () => {
    it('빈 값이다', () => {
      const { result } = renderHook(() => useTitle(), { wrapper: RecoilRoot });
      expect(result.current.articleElements.title).toBe('');
    });
  });
});

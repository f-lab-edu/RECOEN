import { renderHook, act } from '@testing-library/react';
import { useImageUrl } from '../useHandleArticle';
import { RecoilRoot } from 'recoil';

describe('useImageUrl', () => {
  describe('초기값은', () => {
    it('빈 값이다', () => {
      const { result } = renderHook(() => useImageUrl(), {
        wrapper: RecoilRoot,
      });
      expect(result.current.imgUrl).toBe('');
    });
  });

  describe('setArticleTitle을 통해서', () => {
    it('articleElements.title 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useImageUrl(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setUrl('http://recoen.com');
      });

      expect(result.current.imgUrl).toBe('http://recoen.com');
    });
  });
});

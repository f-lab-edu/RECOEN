import { renderHook, act } from '@testing-library/react';
import { useTitle } from '../useCreatArticle';
import { RecoilRoot } from 'recoil';

describe('useTitle', () => {
  describe('초기값은', () => {
    it('빈 값이다', () => {
      const { result } = renderHook(() => useTitle(), { wrapper: RecoilRoot });
      expect(result.current.title).toBe('');
    });
  });

  describe('setArticleTitle을 통해서', () => {
    it('articleElements.title 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useTitle(), { wrapper: RecoilRoot });

      act(() => {
        result.current.setArticleTitle({
          target: {
            name: 'text',
            value: '제목',
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.title).toBe('제목');
    });
  });

  describe('setArticleTitle을 통해서', () => {
    it('articleElements.title 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useTitle(), { wrapper: RecoilRoot });

      act(() => {
        result.current.setArticleTitle({
          target: {
            name: 'text',
            value: '제목',
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.articleElements.title).toBe('제목');
    });
  });
});

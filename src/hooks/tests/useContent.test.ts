import { renderHook, act } from '@testing-library/react';
import { useContent } from '../useHandleArticle';
import { RecoilRoot } from 'recoil';

describe('useContent', () => {
  describe('초기값은', () => {
    it('빈 값이다', () => {
      const { result } = renderHook(() => useContent(), {
        wrapper: RecoilRoot,
      });
      expect(result.current.content).toBe('');
    });
  });

  describe('setMarkDown을 통해서', () => {
    it('content 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useContent(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setMarkDown('# 컨텐츠');
      });

      expect(result.current.content).toBe('# 컨텐츠');
    });
  });
});

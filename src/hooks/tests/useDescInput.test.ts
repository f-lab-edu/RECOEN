import { renderHook, act } from '@testing-library/react';
import { useDescription } from '../useHandleArticle';
import { RecoilRoot } from 'recoil';

describe('useDescription', () => {
  describe('초기값은', () => {
    it('빈 값이다', () => {
      const { result } = renderHook(() => useDescription(), {
        wrapper: RecoilRoot,
      });
      expect(result.current.desc).toBe('');
    });
  });

  describe('setDesc를 통해서', () => {
    it('content 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useDescription(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setDesc('설명글');
      });

      expect(result.current.desc).toBe('설명글');
    });
  });
});

import { renderHook, act } from '@testing-library/react';
import { useTags } from '../useCreatArticle';
import { RecoilRoot } from 'recoil';

describe('useTags', () => {
  describe('초기값은', () => {
    it('빈 값이다', () => {
      const { result } = renderHook(() => useTags(), { wrapper: RecoilRoot });
      expect(result.current.tags).toStrictEqual([]);
    });
  });

  describe('setTags을 통해서', () => {
    it('tags 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useTags(), { wrapper: RecoilRoot });

      act(() => {
        result.current.setTags(['태그1', '태그2']);
      });

      expect(result.current.tags).toStrictEqual(['태그1', '태그2']);
    });
  });
});

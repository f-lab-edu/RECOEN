import { renderHook, act } from '@testing-library/react';
import { useArticleElement } from '../useHandleArticle';
import { RecoilRoot } from 'recoil';

describe('useArticleElement', () => {
  describe('setArticleElement를 통해서', () => {
    it('content 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useArticleElement(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setArticleElement({ content: '# 컨텐츠' });
      });

      expect(result.current.articleElements.content).toBe('# 컨텐츠');
    });

    it('title 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useArticleElement(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setArticleElement({ title: '제목' });
      });

      expect(result.current.articleElements.title).toBe('제목');
    });

    it('description 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useArticleElement(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setArticleElement({ description: '설명글' });
      });

      expect(result.current.articleElements.description).toBe('설명글');
    });

    it('imgUrl 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useArticleElement(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setArticleElement({ imgUrl: '이미지' });
      });

      expect(result.current.articleElements.imgUrl).toBe('이미지');
    });

    it('tags 값을 변경시킬 수 있다', () => {
      const { result } = renderHook(() => useArticleElement(), {
        wrapper: RecoilRoot,
      });

      act(() => {
        result.current.setArticleElement({ tags: ['tag1', 'tag2'] });
      });

      expect(result.current.articleElements.tags).toEqual(['tag1', 'tag2']);
    });
  });
});

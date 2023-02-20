import { renderHook, act, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useFilterArticle } from 'src/hooks/useFilterArticle';

describe('useFilterArticle', () => {
  it('입력된 태그에 따라서 list가 필터되어야 한다. ', () => {
    const { result } = renderHook(
      () => {
        useFilterArticle();
      },
      {
        wrapper: RecoilRoot,
      },
    );
  });
});

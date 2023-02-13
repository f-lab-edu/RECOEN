import { render, screen } from '@testing-library/react';
import ImageUpload from './ImageUpload';

import { RecoilObserver } from 'src/utils';
import { RecoilRoot } from 'recoil';
import { articleState } from 'src/recoil/article';
import { useArticleElement } from 'src/hooks';

describe('ImageUpload', () => {
  const onChange = jest.fn();
  const renderImageUpload = () =>
    render(
      <RecoilRoot>
        <RecoilObserver node={articleState} onChange={onChange} />
        <ImageUpload useArticleElement={useArticleElement} />
      </RecoilRoot>,
    );

  it('렌더링되어야한다', () => {
    renderImageUpload();
    const imageUpload = screen.getByText(/이미지 추가/);
    expect(imageUpload).toBeInTheDocument();
  });
});

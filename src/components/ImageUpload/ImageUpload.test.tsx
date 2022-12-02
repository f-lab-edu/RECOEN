import { render, screen } from '@testing-library/react';
import ImageUpload from './ImageUpload';

import RecoilObserver from 'src/components/RecoilObserver';
import { RecoilRoot } from 'recoil';
import { articleState } from 'src/recoil/article';
import { useArticleElement } from 'src/hooks/useHandleArticle';

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

  // describe('이미지를 선택하면', () => {
  //   // jest.mock('src/hooks'); NOTE : usePreview 모킹해서 확인하기
  //   it('preview 이미지가 보여야한다.', async () => {
  //     // renderImageUpload();
  //     // const imageInput = screen.getByTestId('fileinput');
  //     // fireEvent.change(imageInput, {
  //     //   target: {
  //     //     files: [
  //     //       new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
  //     //     ],
  //     //   },
  //     // });
  //     // const preview = screen.queryByAltText('preview image');
  //     // expect(preview).toBeInTheDocument();
  //   });

  //   it('UploadBox가 사라져야한다.', () => {});
  // });
});

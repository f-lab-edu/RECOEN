import { render, screen } from '@testing-library/react';
import { ImageUpload } from 'src/components';

describe('ImageUpload', () => {
  const setImageUrl = jest.fn();
  const renderImageUpload = () =>
    render(<ImageUpload setImageUrl={setImageUrl} />);

  it('렌더링되어야한다', () => {
    renderImageUpload();
    const imageUpload = screen.getByText(/이미지 추가/);
    expect(imageUpload).toBeInTheDocument();
  });

  describe('이미지를 선택하면', () => {
    // jest.mock('src/hooks'); NOTE : usePreview 모킹해서 확인하기
    it('preview 이미지가 보여야한다.', () => {});
    it('UploadBox가 사라져야한다.', () => {});
  });
});

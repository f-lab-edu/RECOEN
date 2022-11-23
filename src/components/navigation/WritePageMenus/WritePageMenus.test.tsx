import { render, fireEvent } from '@testing-library/react';
import WritePageMenus from './WritePageMenus';
import RecoilObserver from 'src/components/RecoilObserver';
import { RecoilRoot } from 'recoil';
import { modalState } from 'src/recoil/modal';

describe('WritePageMenus', () => {
  const onChange = jest.fn();
  const renderMenus = () =>
    render(
      <RecoilRoot>
        <RecoilObserver node={modalState} onChange={onChange} />
        <WritePageMenus />
      </RecoilRoot>,
    );

  describe('나가기 버튼을 누르면', () => {
    it('메인 페이지로 이동한다', () => {
      const { getByText } = renderMenus();
      const link = getByText(/나가기/).closest('a');

      expect(link).toHaveAttribute('href', '/');
    });
  });

  describe('게시하기 버튼을 누르면', () => {
    it('모달이 열린다', () => {
      const { getByText } = renderMenus();
      const button = getByText('게시하기');

      fireEvent.click(button);

      expect(onChange).toHaveBeenNthCalledWith(3, 'CREATE_ARTICLE');
    });
  });
});

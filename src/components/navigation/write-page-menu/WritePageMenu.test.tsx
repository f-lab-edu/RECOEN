import { render } from '@testing-library/react';
import WritePageMenu from './WritePageMenu';
import { RecoilObserver } from 'src/utils';
import { RecoilRoot } from 'recoil';
import { modalState } from 'src/recoil/modal';

describe('WritePageMenu', () => {
  const onChange = jest.fn();
  const renderMenus = () =>
    render(
      <RecoilRoot>
        <RecoilObserver node={modalState} onChange={onChange} />
        <WritePageMenu />
      </RecoilRoot>,
    );

  context('나가기 버튼을 누르면', () => {
    it('메인 페이지로 이동한다', () => {
      const { getByText } = renderMenus();
      const link = getByText(/나가기/).closest('a');

      expect(link).toHaveAttribute('href', '/');
    });
  });

  context('게시하기 버튼은 초기에', () => {
    it('disabled 상태여야 한다', () => {
      const { getByText } = renderMenus();

      expect(getByText('게시하기')).toHaveStyle('cursor : not-allowed');
    });
  });
});

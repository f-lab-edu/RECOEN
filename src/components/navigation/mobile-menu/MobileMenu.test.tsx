import { render, act, waitFor, screen } from '@testing-library/react';
import MobileMenu from './MobileMenu';

import { RecoilRoot } from 'recoil';
import RecoilObserver from 'src/components/RecoilObserver';
import { modalState } from 'src/recoil/modal';
import { mockRouter } from 'src/utils/test-utils';

jest.mock('src/utils/getPathname');

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => ({
    pathname: '/programming',
  })),
}));

describe('Menus', () => {
  const onChange = jest.fn();
  const renderMenus = () =>
    render(
      mockRouter(
        <RecoilRoot>
          <RecoilObserver node={modalState} onChange={onChange} />
          <MobileMenu />
        </RecoilRoot>,
        { pathname: '/programming' },
      ),
    );

  context('처음 렌더링되고 나서', () => {
    it('햄버거 메뉴가 먼저 나온다.', () => {
      const { getByAltText } = renderMenus();

      expect(getByAltText('hamburger menu')).toBeInTheDocument();
    });

    context('햄버거 메뉴를 클릭하면', () => {
      it('모바일 버전 카테고리 모달이 나온다.', () => {
        const { getByText, getByAltText } = renderMenus();
        const burgerMenu = getByAltText('hamburger menu');

        act(() => burgerMenu.click());

        waitFor(() => {
          expect(getByText('Programming')).toBeInTheDocument();
          expect(getByText('Book')).toBeInTheDocument();
          expect(getByText('Essay')).toBeInTheDocument();
          expect(getByText('About')).toBeInTheDocument();
        });
      });

      it('기존의 햄버거 버튼이 사라지고, close 버튼이 화면에 나온다', () => {
        const { getByAltText } = renderMenus();
        const burgerMenu = getByAltText('hamburger menu');

        act(() => burgerMenu.click());

        expect(burgerMenu).not.toBeInTheDocument();
        expect(getByAltText('remove navbar modal')).toBeInTheDocument();
      });
    });
  });
});

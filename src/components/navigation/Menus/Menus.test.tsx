import { render, act } from '@testing-library/react';
import Menus from './Menus';

import { useSession } from 'next-auth/react';

import { RecoilRoot } from 'recoil';
import RecoilObserver from 'src/components/RecoilObserver';
import { modalState } from 'src/recoil/modal';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => ({
    pathname: '/programming',
  })),
}));

jest.mock('next-auth/react');

const menus = [
  {
    name: 'Programming',
    href: '/programming',
  },
  {
    name: 'Book',
    href: '/book',
  },
  {
    name: 'Essay',
    href: '/essay',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const mockUseSession = (data: boolean) => {
  (useSession as jest.Mock).mockImplementation(() => {
    return { data };
  });
};

describe('Menus', () => {
  const onChange = jest.fn();
  const renderMenus = () =>
    render(
      <RecoilRoot>
        <RecoilObserver node={modalState} onChange={onChange} />
        <Menus />
      </RecoilRoot>,
    );

  beforeEach(() => mockUseSession(false));

  context('로그아웃 상태이면', () => {
    it('로그인 버튼이 나온다', () => {
      const { getByText } = renderMenus();

      expect(getByText('로그인')).toBeInTheDocument();
    });
  });

  context('로그인 상태이면', () => {
    it('로그아웃, + 글쓰기 버튼이 나온다', () => {
      mockUseSession(true);
      const { getByText } = renderMenus();

      expect(getByText('로그아웃')).toBeInTheDocument();
      expect(getByText('+ 글쓰기')).toBeInTheDocument();
    });
  });

  context('각 카테고리를 클릭하면', () => {
    it('각각의 페이지로 이동한다', () => {
      const { getByText } = renderMenus();

      menus.forEach((item) => {
        expect(getByText(item.name).closest('a')).toHaveAttribute(
          'href',
          item.href,
        );
      });
    });
  });

  context('글쓰기 버튼을 클릭하면', () => {
    it('/write 페이지로 이동한다', () => {
      mockUseSession(true);
      const { getByText } = renderMenus();
      const writeLink = getByText('+ 글쓰기').closest('a');

      expect(writeLink).toHaveAttribute('href', '/write');
    });
  });

  context('로그인 버튼을 클릭하면', () => {
    it('로그인 모달이 나온다', async () => {
      const { getByText } = renderMenus();
      const loginButton = getByText('로그인');

      await act(() => {
        loginButton.click();
      });

      expect(onChange).toHaveBeenNthCalledWith(6, 'LOGIN');
    });
  });
});

import { render } from '@testing-library/react';
import Menus from './Menus';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => ({
    pathname: '/article',
  })),
}));

const menus = [
  {
    name: 'Article',
    href: '/article',
  },
  {
    name: 'Book',
    href: '/book',
  },
  {
    name: 'Quotes',
    href: '/quotes',
  },
  {
    name: 'About',
    href: '/about',
  },
];

describe('Menus', () => {
  const renderMenus = () => render(<Menus />);

  describe('렌더링', () => {
    it('잘 된다', () => {
      const { getByText } = renderMenus();

      menus.forEach((item) => {
        expect(getByText(item.name)).toBeInTheDocument();
      });

      expect(getByText('로그인')).toBeInTheDocument();
      expect(getByText('+ 글쓰기')).toBeInTheDocument();
    });
  });

  describe('각 카테고리를 클릭하면', () => {
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

  describe('글쓰기 버튼을 클릭하면', () => {
    it('/write 페이지로 이동한다', () => {
      const { getByText } = renderMenus();
      const writeLink = getByText('+ 글쓰기').closest('a');

      expect(writeLink).toHaveAttribute('href', '/write');
    });
  });

  describe('로그인 버튼을 클릭하면', () => {
    it('로그인 모달이 나온다', () => {
      // NOTE : 로그인 기능 개발할 때 다시 작성하기
    });
  });
});

import { render } from '@testing-library/react';
import Menus from './Menus';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  pathname: '/article',
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
        expect(getByText(item.name)).toHaveAttribute('href', item.href);
      });
    });
  });

  describe('글쓰기 버튼을 클릭하면', () => {
    it('/write 페이지로 이동한다', () => {
      const { getByRole } = renderMenus();
      const writeLink = getByRole('link', { name: '+ 글쓰기' });

      expect(writeLink).toHaveAttribute('href', '/write');
    });
  });

  describe('로그인 버튼을 클릭하면', () => {
    it('로그인 모달이 나온다', () => {
      // NOTE : 로그인 기능 개발할 때 다시 작성하기
    });
  });
});

import { render } from '@testing-library/react';
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

  context('렌더링', () => {
    it('button 및 nav등 필요한 요소들이 보인다', () => {
      const { getByRole } = renderMenus();

      expect(getByRole('button')).toBeInTheDocument();
      expect(getByRole('navigation')).toBeInTheDocument();
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
});

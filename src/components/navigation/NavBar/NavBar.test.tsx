import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { matchers } from '@emotion/jest';
import { mockRouter } from '__mocks__/mockRouter';
import { useSession } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
expect.extend(matchers);

jest.mock('next-auth/react');

(useSession as jest.Mock).mockImplementation(() => {
  return { data: null };
});

describe('NavBar', () => {
  const renderNavBar = (pathname: string) =>
    render(
      mockRouter(
        <RecoilRoot>
          <NavBar />
        </RecoilRoot>,
        {
          pathname,
        },
      ),
    );

  context('recoen. 을 클릭하면', () => {
    it('메인 페이지로 이동한다', () => {
      const { getByText } = renderNavBar('/');
      const recoen = getByText(/recoen./).closest('a');

      expect(recoen).toHaveAttribute('href', '/');
    });
  });

  context('detail 페이지에 있으면', () => {
    it('position이 absolute로 바뀐다', () => {
      const { getByTestId } = renderNavBar('/programming/[id]');
      const fixedContainer = getByTestId('fixedContainer');

      expect(fixedContainer).toHaveStyleRule('position', 'absolute');
    });
  });

  context('/write 페이지에 있으면 ', () => {
    it('position이 relative로 바뀐다', () => {
      const { getByTestId } = renderNavBar('/write');
      const fixedContainer = getByTestId('fixedContainer');

      expect(fixedContainer).toHaveStyleRule('position', 'relative');
    });
  });
});

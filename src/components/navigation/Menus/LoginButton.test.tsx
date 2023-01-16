import { screen, render, act } from '@testing-library/react';
import LoginButton from './LoginButton';

import { RecoilRoot } from 'recoil';
import RecoilObserver from 'src/components/RecoilObserver';
import { modalState } from 'src/recoil/modal';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react');

type Session = { isLogin: boolean; isAdmin: boolean };

const mockUseSession = ({ isLogin, isAdmin }: Session) => {
  (useSession as jest.Mock).mockImplementation(() => {
    if (isLogin) return { data: { isAdmin } };
    else return { data: isLogin };
  });
};

describe('LoginButton', () => {
  const onChange = jest.fn();
  const renderLoginButton = () =>
    render(
      <RecoilRoot>
        <RecoilObserver node={modalState} onChange={onChange} />
        <LoginButton />
      </RecoilRoot>,
    );

  beforeEach(() => mockUseSession({ isLogin: false, isAdmin: false }));

  context('로그인 상태가 아니면', () => {
    it('로그인 버튼이 나온다.', () => {
      const { getByText } = renderLoginButton();
      expect(getByText('로그인')).toBeInTheDocument();
    });
  });

  context('로그인 버튼을 클릭하면', () => {
    it('로그인 모달이 나온다', async () => {
      const { getByText } = renderLoginButton();
      const loginButton = getByText('로그인');

      await act(() => {
        loginButton.click();
      });

      expect(onChange).toHaveBeenNthCalledWith(3, 'LOGIN');
    });
  });

  context('로그인 상태이고', () => {
    context('관리자 계정이 아닐 때,', () => {
      it('로그아웃 버튼이 나오고, 글쓰기 버튼이 사라진다', () => {
        mockUseSession({ isLogin: true, isAdmin: false });
        const { queryByText } = renderLoginButton();

        expect(queryByText('로그아웃')).toBeInTheDocument();
        expect(queryByText('+ 글쓰기')).not.toBeInTheDocument();
      });
    });

    context('관리자 계정일 때,', () => {
      it('로그아웃, + 글쓰기 버튼이 나온다', () => {
        mockUseSession({ isLogin: true, isAdmin: true });
        const { queryByText } = renderLoginButton();

        expect(queryByText('로그아웃')).toBeInTheDocument();
        expect(queryByText('+ 글쓰기')).toBeInTheDocument();
      });

      context('+ 글쓰기 버튼을 누르면', () => {
        it('/write 페이지로 이동한다', () => {
          mockUseSession({ isLogin: true, isAdmin: true });
          const { getByText } = renderLoginButton();
          const writeLink = getByText('+ 글쓰기').closest('a');

          expect(writeLink).toHaveAttribute('href', '/write');
        });
      });
    });
  });
});

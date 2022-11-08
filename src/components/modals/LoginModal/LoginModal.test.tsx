import { render, act } from '@testing-library/react';
import LoginModal from 'src/components/modals/LoginModal/LoginModal';
import { signIn } from 'next-auth/react';

import RecoilObserver from 'src/components/RecoilObserver';
import { RecoilRoot } from 'recoil';
import { modalState } from 'src/recoil/modal';

jest.mock('next-auth/react');

describe('LoginModal', () => {
  const onChange = jest.fn();

  const renderLoginModal = () => {
    return render(
      <RecoilRoot>
        <RecoilObserver node={modalState} onChange={onChange} />
        <LoginModal />
      </RecoilRoot>,
    );
  };

  describe('렌더링', () => {
    it('modal_root에 render 되어야 한다.', () => {
      const { getByText } = renderLoginModal();
      expect(getByText('로그인')).toBeInTheDocument();
    });
  });

  describe('"다음에 할게요" 버튼을 클릭하면', () => {
    it('모달이 닫혀야 한다', () => {
      const { getByText } = renderLoginModal();
      const closeButton = getByText('다음에 할게요');

      act(() => closeButton.click());

      expect(onChange).toHaveBeenNthCalledWith(2, null);
    });
  });

  describe('google 버튼을 클릭하면', () => {
    it('signin이 호출된다', () => {
      const { getByText } = renderLoginModal();
      const googleButton = getByText('Google로 로그인하기');

      googleButton.click();

      expect(signIn).toBeCalled();
    });
  });
});

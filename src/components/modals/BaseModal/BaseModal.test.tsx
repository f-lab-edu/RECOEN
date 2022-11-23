import { render, screen } from '@testing-library/react';
import BaseModal from './BaseModal';
import { RecoilRoot } from 'recoil';

interface Props {
  position?: 'right';
}

describe('BaseModal', () => {
  const handleOpenModal = jest.fn();
  const renderModal = ({ position }: Props) => {
    return render(
      <RecoilRoot>
        <div id="modal_root">
          <BaseModal handleOpenModal={handleOpenModal} right={!!position}>
            <div>child</div>
          </BaseModal>
        </div>
      </RecoilRoot>,
    );
  };
  describe('modal_root에 ', () => {
    it('렌더링된다', () => {
      renderModal({});
      const modal = screen.getByTestId('modal');

      expect(modal).toBeInTheDocument();
    });
  });

  describe('overlay를 클릭하면', () => {
    it('handleOpenModal이 호출된다', () => {
      renderModal({});
      const overlay = screen.getByTestId('overlay');

      overlay.click();

      expect(handleOpenModal).toBeCalled();
    });
  });

  describe('props에 right을 넘겨주면', () => {
    it('모달이 오른쪽에 위치한 스타일로 변경된다', () => {
      renderModal({ position: 'right' });
      const modal = screen.getByTestId('modal');

      expect(modal).toHaveStyle({
        right: '0%',
        top: '50%',
        transform: 'translate(0%, -50%)',
      });
    });
  });
});

import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import { RecoilRoot } from 'recoil';

describe('Modal', () => {
  const handleOpenModal = jest.fn();
  it('modal_root에 render되어야 한다.', () => {
    render(
      <RecoilRoot>
        <div id="modal_root">
          <Modal handleOpenModal={handleOpenModal}>
            <div>child</div>
          </Modal>
        </div>
      </RecoilRoot>,
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});

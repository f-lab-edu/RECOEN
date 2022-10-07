import { render, screen } from '@testing-library/react';
import { Modal } from 'src/components/modals/Modal';

describe('Modal', () => {
  const handleOpenModal = jest.fn();
  it('modal_root에 render되어야 한다.', () => {
    render(
      <div id="modal_root">
        <Modal handleOpenModal={handleOpenModal}>
          <div>child</div>
        </Modal>
      </div>,
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { CreateArticleModal } from 'src/components/modals/CreateArticleModal';
import { createArticle } from 'src/utils';
jest.mock('src/utils');

describe('Modal', () => {
  const handleOpenModal = jest.fn();
  const articleElements = {};
  const renderCreateArticleModal = () =>
    render(
      <>
        <div id="modal_root" />
        <CreateArticleModal
          handleOpenModal={handleOpenModal}
          articleElements={articleElements}
        />
      </>,
    );
  describe('rendering', () => {
    it('modal_root에 render되어야 한다.', () => {
      renderCreateArticleModal();
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
    });

    it('취소,저장 버튼이 보여야 한다.', () => {
      renderCreateArticleModal();
      const cancel = screen.getByText(/취소/);
      const save = screen.getByText(/저장/);
      expect(cancel).toBeInTheDocument();
      expect(save).toBeInTheDocument();
    });

    it('가이드 문구가 보여야한다.', () => {
      renderCreateArticleModal();
      const imageGuide = screen.getByText(/대표이미지 선택/);
      const tagGuide = screen.getByText(/태그를 선택하세요./);
      const descGuide = screen.getByText(/설명글을 작성해주세요./);
      expect(imageGuide).toBeInTheDocument();
      expect(tagGuide).toBeInTheDocument();
      expect(descGuide).toBeInTheDocument();
    });
  });

  describe('취소버튼을 클릭하면', () => {
    it('모달이 닫혀야한다.', () => {
      renderCreateArticleModal();
      const cancel = screen.getByText(/취소/);
      fireEvent.click(cancel);
      expect(handleOpenModal).toBeCalled();
    });
  });

  describe('저장버튼을 클릭하면', () => {
    it('createArticle 함수가 호출된다.', () => {
      renderCreateArticleModal();
      const save = screen.getByText(/저장/);
      fireEvent.click(save);
      expect(createArticle).toBeCalled();
    });
  });
});

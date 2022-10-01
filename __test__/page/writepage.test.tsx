import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import WritePage from 'pages/write/index.page';

jest.mock('src/components/TextEditor');
jest.mock('src/utils');

describe('WritePage', () => {
  const renderWritePage = () =>
    render(
      <>
        <div id="modal_root" />
        <WritePage />
      </>,
    );

  describe('rendering', () => {
    it('생성하는 버튼이 보여야 한다.', async () => {
      await act(() => {
        renderWritePage();
      });

      expect(screen.queryByRole('button', { name: '생성하기' })).not.toBeNull();
    });

    it('제목을 입력하는 input이 보여야 한다.', async () => {
      await act(() => {
        renderWritePage();
      });

      expect(
        screen.queryByPlaceholderText('제목을 입력하세요.'),
      ).toBeInTheDocument();
    });
  });

  describe('"생성하기" 버튼을 클릭했을 때', () => {
    it('createArticleModal이 생성된다.', async () => {
      await act(() => {
        renderWritePage();
      });

      const button = screen.getByRole('button', { name: '생성하기' });
      fireEvent.click(button);
      const modal = await screen.findByTestId('createArticleModal');

      expect(modal).toBeInTheDocument();
    });
  });
});

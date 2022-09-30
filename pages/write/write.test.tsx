import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { createArticle } from 'src/utils';

import WritePage from './index.page';

jest.mock('src/components/molecules');
jest.mock('src/utils');

describe('WritePage', () => {
  const renderWritePage = () => render(<WritePage />);

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
        screen.queryByPlaceholderText(/제목을 입력해주세요/),
      ).not.toBeNull();
    });

    it('설명을 입력하는 input이 보여야 한다.', async () => {
      await act(() => {
        renderWritePage();
      });

      expect(
        screen.queryByPlaceholderText(/설명을 입력해주세요/),
      ).not.toBeNull();
    });
  });

  describe('"생성하기" 버튼을 클릭했을 때', () => {
    it('createArticle이 호출된다.', async () => {
      await act(() => {
        renderWritePage();
      });

      fireEvent.click(screen.getByRole('button', { name: '생성하기' }));

      expect(createArticle).toBeCalled();
    });
  });
});

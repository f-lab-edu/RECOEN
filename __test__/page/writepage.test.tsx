import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import WritePage from 'pages/write/index.page';

jest.mock('src/components/TextEditor');
jest.mock('src/utils');

// NOTE : 작성하기 페이지의 책임에 대한 고민. 작성하기 페이지에 헤더 컴포넌트가 나오긴 하지만, 작성하기를 하는 책임이 헤더바 컴포넌트에게 가있는 상황. 이것이 맞는 것일까?

describe('WritePage', () => {
  const renderWritePage = () =>
    render(
      <>
        <div id="modal_root" />
        <WritePage />
      </>,
    );

  describe('rendering', () => {
    it('제목을 입력하는 input이 보여야 한다.', async () => {
      await act(() => {
        renderWritePage();
      });

      expect(
        screen.queryByPlaceholderText('제목을 입력하세요.'),
      ).toBeInTheDocument();
    });
  });
});

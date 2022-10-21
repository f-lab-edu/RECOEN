import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';

import WritePage from './index.page';

jest.mock('src/components/TextEditor');
jest.mock('src/utils');

describe('WritePage', () => {
  const renderWritePage = () =>
    render(
      <RecoilRoot>
        <div id="modal_root" />
        <WritePage />
      </RecoilRoot>,
    );

  describe('rendering', () => {
    it('제목을 입력하는 input이 보여야 한다.', async () => {
      await act(() => {
        renderWritePage();
      });

      expect(screen.queryByTestId('titleInput')).toBeInTheDocument();
    });
  });
});

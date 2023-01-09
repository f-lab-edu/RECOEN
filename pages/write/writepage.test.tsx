import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';
import { useDetectResolution } from 'src/hooks/useDetectResolution';

import WritePage from './index.page';

jest.mock('src/components/TextEditor');
jest.mock('src/utils');
jest.mock('src/hooks/useDetectResolution', () => {
  return {
    useDetectResolution: jest.fn(),
  };
});

describe('WritePage', () => {
  const renderWritePage = () =>
    render(
      <RecoilRoot>
        <div id="modal_root" />
        <WritePage />
      </RecoilRoot>,
    );

  context('DESKTOP 화면일 때,', () => {
    it('제목입력 input, 카테고리 input이 보여야 한다.', async () => {
      (useDetectResolution as jest.Mock).mockImplementation(() => {
        return 'DESKTOP';
      });

      await act(() => {
        renderWritePage();
      });

      expect(screen.getByLabelText('제목을 입력해주세요')).toBeInTheDocument();
      expect(screen.getByText('카테고리')).toBeInTheDocument();
    });
  });

  context('MOBILE 화면일 때,', () => {
    it('해당기기는 지원하지 않는다는 문구가 나와야한다.', async () => {
      (useDetectResolution as jest.Mock).mockImplementation(() => {
        return 'MOBILE';
      });

      await act(() => {
        renderWritePage();
      });

      expect(
        screen.getByText('This page is not supported on this devices.'),
      ).toBeInTheDocument();
    });
  });
});

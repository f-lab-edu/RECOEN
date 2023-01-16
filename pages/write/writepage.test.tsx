import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';
import { useDetectResolution } from 'src/hooks';
import { mockUseSession } from 'src/utils/test-utils';

import WritePage from './index.page';

jest.mock('next-auth/react');
jest.mock('src/components/TextEditor');
jest.mock('src/utils');
jest.mock('src/hooks/useDetectResolution', () => {
  return {
    useDetectResolution: jest.fn(),
  };
});

const resolveDevice = (device: 'DESKTOP' | 'MOBILE') => {
  (useDetectResolution as jest.Mock).mockImplementation(() => {
    return device;
  });
};

describe('WritePage', () => {
  const renderWritePage = () =>
    render(
      <RecoilRoot>
        <div id="modal_root" />
        <WritePage />
      </RecoilRoot>,
    );

  beforeEach(() => mockUseSession({ isLogin: false, isAdmin: false }));

  // TODO : 모달 구현방식 리팩토링 한 다음 권한 없음에 대한 테스트 다시하기
  // context('관리자 권한이 없을 때', () => {
  //   it('handleOpenModal 함수가 UNAUTH라는 인자와 함께 호출된다', async () => {
  //     resolveDevice('DESKTOP');

  //     const handleOpenModal = jest.fn();
  //     jest.mock('src/hooks/useHandleOpenModal', () => {
  //       return {
  //         useHandleOpenModal: jest.fn().mockReturnValue(handleOpenModal),
  //       };
  //     });

  //     await act(() => {
  //       renderWritePage();
  //     });

  //     expect(handleOpenModal).toBeCalledWith('UNAUTH');
  //   });
  // });

  context('DESKTOP 화면일 때,', () => {
    it('제목입력 input, 카테고리 input이 보여야 한다.', async () => {
      resolveDevice('DESKTOP');

      await act(() => {
        renderWritePage();
      });

      expect(screen.getByLabelText('제목을 입력해주세요')).toBeInTheDocument();
      expect(screen.getByText('카테고리')).toBeInTheDocument();
    });
  });

  context('MOBILE 화면일 때,', () => {
    it('해당기기는 지원하지 않는다는 문구가 나와야한다.', async () => {
      resolveDevice('MOBILE');

      await act(() => {
        renderWritePage();
      });

      expect(
        screen.getByText('This page is not supported on this devices.'),
      ).toBeInTheDocument();
    });
  });
});

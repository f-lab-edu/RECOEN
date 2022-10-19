import { render, fireEvent } from '@testing-library/react';
import DescInput from 'src/components/Inputs/DescInput';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

describe('DescInput', () => {
  const onChange = jest.fn();
  const renderDescInput = () => render(<DescInput onChange={onChange} />);
  describe('focus되면', () => {
    it('인풋라인이 파란색으로 바뀐다', async () => {
      const { getByRole } = renderDescInput();
      const descInput = getByRole('textbox');
      expect(descInput).toBeInTheDocument();

      expect(descInput).toHaveStyleRule('border', '1px solid #3c3e44');

      fireEvent.keyDown(descInput, { key: 'Enter' });

      await expect(descInput).toHaveStyleRule('border', '1px solid #3941ff');
    });
  });

  describe('입력하면', () => {
    it('onChange에 값이 들어간다', async () => {
      const { getByRole } = renderDescInput();
      const descInput = getByRole('textbox');
      expect(descInput).toBeInTheDocument();

      fireEvent.change(descInput, { target: { value: '입력' } });

      expect(onChange).toBeCalledWith('입력');
    });
  });

  describe('글자가 200자가 넘어갔을 때', () => {
    it('인풋라인이 빨간색으로 바뀐다', async () => {
      const { getByRole } = renderDescInput();
      const descInput = getByRole('textbox');
      expect(descInput).toBeInTheDocument();

      expect(descInput).toHaveStyleRule('border', '1px solid #3c3e44');

      descInput.focus();

      fireEvent.change(descInput, {
        target: {
          value:
            'Web Vital이란 탁월한 사용자 경험을 제공하기 위한 핵심 지침입니다. 이 Web Vital에는 3가지 핵심 지표가 존재하는데, 그 중 LCP(Lagest Contentful Paint)는 페이지가 처음으로 로드를 시작한 시점을 기준으로 화면에 있는 가장 큰 이미지 또는 텍스트블록의 렌더링 시간을 알려줍니다. 그리고 텍스트보다도 특히 이미지의 사이즈,갯',
        },
      });

      expect(descInput).toHaveStyleRule('border', '1px solid #c4001d');
    });

    describe('다시 Backspace를 하면', () => {
      it('인풋라인이 파란색으로 돌아온다', async () => {
        const { getByRole } = renderDescInput();
        const descInput = getByRole('textbox');
        expect(descInput).toBeInTheDocument();

        fireEvent.change(descInput, {
          target: {
            value:
              'Web Vital이란 탁월한 사용자 경험을 제공하기 위한 핵심 지침입니다. 이 Web Vital에는 3가지 핵심 지표가 존재하는데, 그 중 LCP(Lagest Contentful Paint)는 페이지가 처음으로 로드를 시작한 시점을 기준으로 화면에 있는 가장 큰 이미지 또는 텍스트블록의 렌더링 시간을 알려줍니다. 그리고 텍스트보다도 특히 이미지의 사이즈,갯',
          },
        });

        expect(descInput).toHaveStyleRule('border', '1px solid #c4001d');

        const backspaceOptions = {
          key: 'Backspace',
          keyCode: 8,
          charCode: 8,
        };
        await fireEvent.keyDown(descInput, backspaceOptions);

        expect(descInput).toHaveStyleRule('border', '1px solid #3941ff');
      });
    });

    describe('onBlur가 일어나면', () => {
      it('인풋라인에 빨간색이 사라진다', async () => {
        const { getByRole } = renderDescInput();
        const descInput = getByRole('textbox');
        expect(descInput).toBeInTheDocument();

        fireEvent.change(descInput, {
          target: {
            value:
              'Web Vital이란 탁월한 사용자 경험을 제공하기 위한 핵심 지침입니다. 이 Web Vital에는 3가지 핵심 지표가 존재하는데, 그 중 LCP(Lagest Contentful Paint)는 페이지가 처음으로 로드를 시작한 시점을 기준으로 화면에 있는 가장 큰 이미지 또는 텍스트블록의 렌더링 시간을 알려줍니다. 그리고 텍스트보다도 특히 이미지의 사이즈,갯',
          },
        });
        fireEvent.keyDown(descInput, { key: 'Enter' });
        expect(descInput).toHaveStyleRule('border', '1px solid #c4001d');

        fireEvent.blur(descInput);

        expect(descInput).toHaveStyleRule('border', '1px solid #3c3e44');
      });
    });
  });
});

import { render, fireEvent } from '@testing-library/react';
import { TagInput, Props } from '../../../src/components/Inputs/TagInput';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

describe('TagInput', () => {
  const onChange = jest.fn();
  const renderTagInput = (props: Partial<Props> = {}) => {
    const initialProps: Props = { values: [], onChange };
    const utils = render(<TagInput {...initialProps} {...props} />);
    return { ...utils };
  };
  const tags = { values: ['태그1', '태그2', '태그3'] };

  it('render correctly', () => {
    renderTagInput();
  });

  describe('태그를 입력하면', () => {
    it('태그가 화면에 보인다.', () => {
      const tagInput = renderTagInput(tags);
      expect(tagInput.getByText('태그1')).toBeInTheDocument();
      expect(tagInput.getByText('태그2')).toBeInTheDocument();
    });
  });

  describe('태그를 클릭하면', () => {
    it('태그가 지워진다.', () => {
      const tagInput = renderTagInput(tags);
      const tag1 = tagInput.getByText('태그1');

      expect(tag1).toBeInTheDocument();
      fireEvent.click(tag1);
      expect(onChange).toBeCalledWith(['태그2', '태그3']);
    });
  });

  describe('태그가 3개 이상일 때 입력하면', () => {
    it('인풋의 아웃라인 스타일이 빨간색으로 변한다', () => {
      const { getByRole } = renderTagInput(tags);
      const input = getByRole('textbox');

      expect(input).toBeInTheDocument();
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(input).toHaveStyleRule('border', '1px solid #c4001d');
    });
  });

  describe('인풋에서 Backspace를 입력하면', () => {
    it('태그가 지워진다', async () => {
      const { getByRole, getByText } = renderTagInput(tags);
      tags.values.forEach((tag) => {
        expect(getByText(tag)).toBeInTheDocument();
      });
      const input = getByRole('textbox');
      const backspaceOptions = {
        key: 'Backspace',
        keyCode: 8,
        charCode: 8,
      };
      await fireEvent.keyDown(input, backspaceOptions);

      expect(onChange).toBeCalledWith(['태그1', '태그2']);
    });
  });

  describe('동일한 태그를 입력하면', () => {
    it('입력이 되지 않는다', () => {
      const tags = { values: ['태그1', '태그2'] };
      const { getByRole, getByText, getAllByText } = renderTagInput(tags);
      tags.values.forEach((tag) => {
        expect(getByText(tag)).toBeInTheDocument();
      });

      const input = getByRole('textbox');

      expect(getAllByText(/태그/)).toHaveLength(2);

      fireEvent.change(input, { target: { value: '태그1' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getAllByText(/태그/)).toHaveLength(2);
    });
  });

  describe('태그인풋에 blur 이벤트가 발생하면', () => {
    it('에러 라인이 사라진다', () => {
      const { getByRole } = renderTagInput(tags);
      const input = getByRole('textbox');

      expect(input).toBeInTheDocument();
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(input).toHaveStyleRule('border', '1px solid #c4001d');

      fireEvent.blur(input);

      expect(input).toHaveStyleRule('border', '1px solid #3c3e44');
    });
  });
});

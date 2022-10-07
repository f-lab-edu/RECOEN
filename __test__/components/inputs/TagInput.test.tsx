import { render, fireEvent } from '@testing-library/react';

import { TagInput, Props } from '../../../src/components/Inputs/TagInput';

describe('TagInput', () => {
  const onChange = jest.fn();
  const renderTagInput = (props: Partial<Props> = {}) => {
    const initialProps: Props = { values: [], onChange };
    const utils = render(<TagInput {...initialProps} {...props} />);
    return { ...utils };
  };

  it('render correctly', () => {
    renderTagInput();
  });

  describe('태그를 입력하면', () => {
    it('태그가 화면에 보인다.', () => {
      const tags = { values: ['태그1', '태그2'] };
      const tagInput = renderTagInput(tags);
      expect(tagInput.getByText('태그1')).toBeInTheDocument();
      expect(tagInput.getByText('태그2')).toBeInTheDocument();
    });
  });

  describe('태그를 클릭하면', () => {
    it('태그가 지워진다.', async () => {
      const tags = { values: ['태그1', '태그2'] };
      const tagInput = renderTagInput(tags);
      const tag1 = tagInput.getByText('태그1');

      expect(tag1).toBeInTheDocument();
      fireEvent.click(tag1);
      expect(onChange).toBeCalledWith(['태그2']);
    });
  });
});

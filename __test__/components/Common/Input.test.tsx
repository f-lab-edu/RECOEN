import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from 'src/components/common/Input';

describe('Input', () => {
  const onChange = jest.fn();

  const renderInput = (placeholder: string) =>
    render(<Input placeholder={placeholder} onChange={onChange} />);

  it('넘겨준 placeholder가 input placeholder에 반영된다.', () => {
    const placeholder = 'placeholder';
    renderInput(placeholder);

    screen.getByPlaceholderText(placeholder);

    expect(screen.queryByPlaceholderText(placeholder)).not.toBeNull();
  });

  it('input에 입력하면 onChange가 호출된다.', () => {
    const placeholder = 'placeholder';
    const value = '입력한 값';
    renderInput(placeholder);

    fireEvent.change(screen.getByPlaceholderText(placeholder), {
      target: { value },
    });

    expect(onChange).toBeCalledWith(value);
  });
});

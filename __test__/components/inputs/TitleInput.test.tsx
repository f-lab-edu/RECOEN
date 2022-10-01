import { render, screen, fireEvent } from '@testing-library/react';
import { TitleInput } from 'src/components/Inputs';

describe('TitleInput', () => {
  const onChange = jest.fn();
  const renderTitleInput = () => render(<TitleInput onChange={onChange} />);

  it('제목을 입력하세요 placeholder가 화면에 나타난다.', () => {
    renderTitleInput();
    const placeholder = '제목을 입력하세요.';
    expect(screen.queryByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('인풋에 입력하면 onChange가 호출된다.', () => {
    renderTitleInput();
    const placeholder = '제목을 입력하세요.';
    const title = '제목';

    const titleInput = screen.getByPlaceholderText(placeholder);
    expect(titleInput).toBeInTheDocument();

    fireEvent.change(titleInput, {
      target: { title },
    });

    expect(onChange).toBeCalled();
  });
});

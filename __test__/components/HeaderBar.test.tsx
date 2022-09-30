import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderBar } from 'src/components/HeaderBar';
import '@testing-library/jest-dom';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  pathname: '/article',
}));

describe('HeaderBar', () => {
  it('should render title correctly', () => {
    render(<HeaderBar />);
    const title = screen.getByText(/recoen./);
    expect(title).toBeInTheDocument();
  });

  it('should render all link correctly', () => {
    render(<HeaderBar />);
    const article = screen.getByRole('link', {
      name: '개발 아티클 리스트 페이지입니다.',
    });
    const book = screen.getByRole('link', {
      name: '독후감 아티클 리스트 페이지입니다.',
    });
    const essay = screen.getByRole('link', {
      name: '에세이 리스트 페이지입니다.',
    });
    const quotes = screen.getByRole('link', {
      name: '인용구 리스트 페이지입니다.',
    });

    expect(article).toBeInTheDocument();
    expect(book).toBeInTheDocument();
    expect(essay).toBeInTheDocument();
    expect(quotes).toBeInTheDocument();
  });

  describe('each links', () => {
    it('could be clicked', () => {
      render(<HeaderBar />);
      const article = screen.getByRole('link', {
        name: '개발 아티클 리스트 페이지입니다.',
      });

      fireEvent.click(article);
      expect(useRouter).toBeCalled();
    });
  });
});

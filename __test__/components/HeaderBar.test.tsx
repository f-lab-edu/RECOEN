import { render, screen } from '@testing-library/react';
import { HeaderBar } from 'src/components/headerBar';

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
    const article = screen.getByText(/Article/);
    const book = screen.getByText(/Book/);
    const essay = screen.getByText(/Essay/);
    const quotes = screen.getByText(/About/);

    expect(article).toBeInTheDocument();
    expect(book).toBeInTheDocument();
    expect(essay).toBeInTheDocument();
    expect(quotes).toBeInTheDocument();
  });
});

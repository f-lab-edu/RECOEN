import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  pathname: '/article',
}));

describe('NavBar', () => {
  it('should render title correctly', () => {
    render(<NavBar />);
    const title = screen.getByText(/recoen./);
    expect(title).toBeInTheDocument();
  });

  it('should render all link correctly', () => {
    render(<NavBar />);
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

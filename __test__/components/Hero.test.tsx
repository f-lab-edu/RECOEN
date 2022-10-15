import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from 'src/components';
describe('Hero', () => {
  it('입력된 text가 화면에 보여야 한다', () => {
    render(<Hero heroText="Article" listLength={3} />);
    expect(screen.getByText(/Article/)).toBeInTheDocument();
  });
});

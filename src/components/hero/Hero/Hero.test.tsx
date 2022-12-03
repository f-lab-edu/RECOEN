import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { RecoilRoot } from 'recoil';

describe('Hero', () => {
  it('입력된 text가 화면에 보여야 한다', () => {
    render(
      <RecoilRoot>
        <Hero text="Article" listLength={3} />
      </RecoilRoot>,
    );

    expect(screen.getByText(/Article/)).toBeInTheDocument();
  });
});

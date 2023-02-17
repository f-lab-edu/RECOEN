import { render, screen } from '@testing-library/react';
import Article from './Article';
import { viewArticle } from 'src/fixtures';

describe('<Article/>', () => {
  it('should render correctly', () => {
    render(<Article article={viewArticle} index={0} />);

    const title = screen.getByRole('heading', {
      name: /리액트 fiber에 대해서 알아보자/i,
    });
    const description = screen.getByText(
      /리액트 fiber에 대해서 설명하는 글입니다/i,
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  context('index가 3이상이면', () => {
    it('이미지의 loading이 lazy여야 한다', () => {
      render(<Article article={viewArticle} index={3} />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('loading', 'lazy');
    });
  });

  context('index가 3미만이면', () => {
    it('이미지의 loading이 eager여야 한다', () => {
      render(<Article article={viewArticle} index={2} />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('loading', 'eager');
    });
  });
});

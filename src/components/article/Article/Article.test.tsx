import { render, screen } from '@testing-library/react';
import Article from './Article';
import { viewArticle } from 'src/fixtures';

describe('<Article/>', () => {
  it('should render correctly', () => {
    render(<Article article={viewArticle} />);

    const title = screen.getByRole('heading', {
      name: /리액트 fiber에 대해서 알아보자/i,
    });
    const description = screen.getByText(
      /리액트 fiber에 대해서 설명하는 글입니다/i,
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});

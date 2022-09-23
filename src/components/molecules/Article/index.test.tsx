import { render, screen } from '@testing-library/react';
import { Article } from './index';
import '@testing-library/jest-dom';

describe('<Article/>', () => {
  it('should render correctly', () => {
    const props = {
      title: '리액트 fiber에 대해서 알아보자',
      description: '리액트 fiber에 대해서 설명하는 글입니다',
      path: '123',
    };
    render(
      <Article
        title={props.title}
        description={props.description}
        path={props.path}
      />,
    );

    const article = screen.getByRole('link', {
      name: /리액트 fiber에 대해서 알아보자/i,
    });
    expect(article).toBeInTheDocument();
  });
});

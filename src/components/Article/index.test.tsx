import { render, screen } from '@testing-library/react';
import { Article } from './Article';
import '@testing-library/jest-dom';

describe('<Article/>', () => {
  it('should render correctly', () => {
    const props = {
      title: '리액트 fiber에 대해서 알아보자',
      description: '리액트 fiber에 대해서 설명하는 글입니다',
      path: '123',
      imgUrl:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Frecoen.s3.ap-northeast-2.amazonaws.com%2Fnext-s3-uploads%2F34606707-2b1e-4f0f-ac8b-d4d937a240d4%2Fsumner-mahaffey-7Y0NshQLohk-unsplash.jpg&w=3840&q=75',
      hashtag: '리액트',
    };
    render(
      <Article
        title={props.title}
        description={props.description}
        path={props.path}
        imgUrl={props.imgUrl}
      />,
    );

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

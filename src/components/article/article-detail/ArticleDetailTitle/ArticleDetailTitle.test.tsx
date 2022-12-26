import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import ArticleDetailTitle from './ArticleDetailTitle';
import { article } from 'src/fixtures';

describe('<ArticleDetailTitle/>', () => {
  const renderArticleDetailTitle = () => {
    return render(
      <RecoilRoot>
        <ArticleDetailTitle article={article} />
      </RecoilRoot>,
    );
  };

  it('should render correctly', () => {
    const { getByText } = renderArticleDetailTitle();

    expect(getByText('리액트 fiber에 대해서 알아보자')).toBeInTheDocument();
    expect(getByText('태그1')).toBeInTheDocument();
    expect(getByText('2022.12.26')).toBeInTheDocument();
  });
});

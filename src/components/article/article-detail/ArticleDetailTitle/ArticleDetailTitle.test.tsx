import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import ArticleDetailTitle from './ArticleDetailTitle';
import { article } from 'src/fixtures';
import { mockUseSession } from 'src/utils/test-utils';

jest.mock('next-auth/react');

describe('<ArticleDetailTitle/>', () => {
  const renderArticleDetailTitle = () => {
    return render(
      <RecoilRoot>
        <ArticleDetailTitle article={article} />
      </RecoilRoot>,
    );
  };

  beforeEach(() => mockUseSession({ isLogin: false, isAdmin: false }));

  it('should render correctly', () => {
    const { getByText } = renderArticleDetailTitle();

    expect(getByText('리액트 fiber에 대해서 알아보자')).toBeInTheDocument();
    expect(getByText('태그1')).toBeInTheDocument();
    expect(getByText('2022.12.26')).toBeInTheDocument();
  });

  context('관리자 계정일 때,', () => {
    it('수정, 삭제 버튼이 나온다', () => {
      mockUseSession({ isLogin: true, isAdmin: true });

      const { getByText } = renderArticleDetailTitle();

      expect(getByText('수정')).toBeInTheDocument();
      expect(getByText('삭제')).toBeInTheDocument();
    });
  });
});

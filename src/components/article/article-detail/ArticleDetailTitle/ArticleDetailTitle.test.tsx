import { render, act } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import ArticleDetailTitle from './ArticleDetailTitle';
import { viewArticle } from 'src/fixtures';
import { mockUseSession } from 'src/utils/test-utils';

const onChange = jest.fn();

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: onChange,
    };
  },
}));

jest.mock('next-auth/react');

describe('<ArticleDetailTitle/>', () => {
  const renderArticleDetailTitle = () => {
    return render(
      <RecoilRoot>
        <ArticleDetailTitle article={viewArticle} />
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

    context('수정 버튼을 클릭하면', () => {
      it('수정 페이지로 이동한다', () => {
        mockUseSession({ isLogin: true, isAdmin: true });

        const { getByText } = renderArticleDetailTitle();

        act(() => {
          getByText('수정').click();
        });

        expect(onChange).toBeCalledWith(
          `/write/60a7e6f1c6e7b6d8f6f0f6f2?type=update`,
        );
      });
    });
  });
});

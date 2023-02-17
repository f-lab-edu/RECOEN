import { render } from '@testing-library/react';
import Essay from './Essay';
import { viewArticle } from 'src/fixtures';

describe('Essay', () => {
  const renderEssay = () => render(<Essay article={viewArticle} index={0} />);
  context('article 내용을 prop으로 받아오면', () => {
    it('해당 값들이 화면에 나타난다.', () => {
      const { getByText } = renderEssay();
      expect(getByText('리액트 fiber에 대해서 알아보자')).toBeInTheDocument();
      expect(
        getByText('리액트 fiber에 대해서 설명하는 글입니다'),
      ).toBeInTheDocument();
    });
  });

  context('Essay 컴포넌트를 클릭하면', () => {
    it('해당 글로 이동한다', () => {
      const { getByRole } = renderEssay();
      const essay = getByRole('link');
      expect(essay).toHaveAttribute('href', '/essay/60a7e6f1c6e7b6d8f6f0f6f2');
    });
  });
});

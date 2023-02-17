import TagSearch from './TagSearch';

import { RecoilRoot } from 'recoil';
import { render, act } from '@testing-library/react';

const tags = ['javascript', 'react', 'performance'];

describe('TagSearch', () => {
  const renderTagSearch = () => {
    return render(
      <RecoilRoot>
        <TagSearch tags={tags} />
      </RecoilRoot>,
    );
  };

  context('tags의 값들이 넘어오면', () => {
    it('화면에 보여진다.', () => {
      const { getByText } = renderTagSearch();

      tags.forEach((tag) => {
        expect(getByText(tag)).toBeInTheDocument();
      });
    });
  });

  context('tag를 선택하면', () => {
    it('선택된 tag로 articles가 정렬된다.', () => {
      const { getByText } = renderTagSearch();

      const selectedTag = getByText('javascript');
      act(() => selectedTag.click());
    });
  });
});

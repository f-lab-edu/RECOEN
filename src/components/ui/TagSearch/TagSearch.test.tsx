import TagSearch from './TagSearch';

import { RecoilRoot } from 'recoil';
import RecoilObserver from 'src/components/RecoilObserver';
import { filteredArticleStates } from 'src/recoil/article';
import { render } from '@testing-library/react';

const tags = ['javascript', 'react', 'performance'];

describe('TagSearch', () => {
  const onChange = jest.fn();
  const renderTagSearch = () => {
    return render(
      <RecoilRoot>
        <RecoilObserver node={filteredArticleStates} onChange={onChange} />
        <TagSearch tags={tags} />
      </RecoilRoot>,
    );
  };

  describe('tags의 값들이', () => {
    it('화면에 보여진다.', () => {
      const { getByText } = renderTagSearch();

      tags.forEach((tag) => {
        expect(getByText(tag)).toBeInTheDocument();
      });
    });
  });

  describe('tags의 값들이', () => {
    it('화면에 보여진다.', () => {
      const { getByText } = renderTagSearch();

      tags.forEach((tag) => {
        expect(getByText(tag)).toBeInTheDocument();
      });
    });
  });
});

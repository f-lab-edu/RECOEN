import { filterArticles } from 'src/utils/filterArticles';
import { viewArticleList } from 'src/fixtures';

describe('filterArticles', () => {
  it('입력된 태그에 따라서 list가 필터되어야 한다. ', () => {
    const filteredList = filterArticles(viewArticleList)('태그1');

    expect(filteredList).toHaveLength(2);
  });
});

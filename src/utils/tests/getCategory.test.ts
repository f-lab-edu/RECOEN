import { getCategory } from '../getCategory';
import { viewArticleList } from 'src/fixtures';

describe('getCategory', () => {
  it('주어진 리스트에서 카테고리 값을 반환해야한다.', () => {
    const category = getCategory(viewArticleList);
    expect(category).toBe('programming');
  });
});

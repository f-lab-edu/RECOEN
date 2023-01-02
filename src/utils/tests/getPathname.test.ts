import { getPathname } from '../getPathname';
import { mockRouter } from 'src/fixtures';

describe('getPathname', () => {
  context('pathname에 [id]가 포함되어 있지 않다면', () => {
    it('pathname을 그대로 반환한다.', () => {
      mockRouter.pathname = '/book';
      expect(getPathname(mockRouter)).toBe('/book');
    });
  });

  context('pathname에 [id]가 포함되어 있다면', () => {
    it('query id와 조합된 pathname을 반환한다.', () => {
      mockRouter.pathname = '/book/[id]';
      mockRouter.query.id = 'asdasdasd';
      expect(getPathname(mockRouter)).toBe('/book/asdasdasd');
    });
  });
});

import { getPathname } from '../getPathname';

describe('getPathname', () => {
  const router = {
    pathname: '/book',
    query: {},
  };

  const router2 = {
    pathname: '/book/[id]',
    query: { id: 'asdasdasd' },
  };
  context('pathname에 [id]가 포함되어 있지 않다면', () => {
    it('pathname을 그대로 반환한다.', () => {
      expect(getPathname(router.pathname)(router.query)).toBe('/book');
    });
  });

  context('pathname에 [id]가 포함되어 있다면', () => {
    it('query id와 조합된 pathname을 반환한다.', () => {
      expect(getPathname(router2.pathname)(router2.query)).toBe(
        '/book/asdasdasd',
      );
    });
  });
});

import { isEmpty } from 'ramda';

interface Router {
  pathname: string;
  query: { [key: string]: string };
}

const makePathname = (router: Router) =>
  router.pathname.replace(/\[id\]/g, router.query.id);

export const getPathname = (router: Router) =>
  isEmpty(router.query) ? router.pathname : makePathname(router);

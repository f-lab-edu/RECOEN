import isEmpty from 'ramda/src/isEmpty';
import { NextRouter } from 'next/router';

const makePathname = (router: NextRouter) =>
  router.pathname.replace(/\[id\]/g, router.query.id as string);

export const getPathname = (router: NextRouter) =>
  isEmpty(router.query) ? router.pathname : makePathname(router);

import prop from 'ramda/src/prop';
import ifElse from 'ramda/src/ifElse';
import isEmpty from 'ramda/src/isEmpty';
import { NextRouter } from 'next/router';

const makePathname = (router: NextRouter) =>
  router.pathname.replace(/\[id\]/g, router.query.id as string);

export const getPathname = ifElse(isEmpty, prop('pathname'), makePathname);

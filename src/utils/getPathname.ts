import isEmpty from 'ramda/src/isEmpty';
import curry from 'ramda/src/curry';

type Query = { [key: string]: string };

const makePathname = curry((pathname: string, query: Query) =>
  pathname.replace(/\[id\]/g, query.id),
);

export const getPathname = curry((pathname: string, query: Query) =>
  isEmpty(query) ? pathname : makePathname(pathname)(query),
);

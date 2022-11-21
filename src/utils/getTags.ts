import { map, pipe, flat, toArray, uniq } from '@fxts/core';

import { ArticleElements } from 'src/types/article';

export const getTags = (lists: ArticleElements[]) =>
  pipe(
    lists,
    map((article) => article.tags),
    flat,
    uniq,
    toArray,
  );

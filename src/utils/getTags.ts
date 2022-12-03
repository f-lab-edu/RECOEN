import { map, pipe, flat, toArray, uniq } from '@fxts/core';

import { ArticleElement } from 'src/types/article';

export const getTags = (lists: ArticleElement[]) =>
  pipe(
    lists,
    map((article) => article.tags),
    flat,
    uniq,
    toArray,
  );

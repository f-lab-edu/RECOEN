import pipe from 'ramda/src/pipe';
import pluck from 'ramda/src/pluck';
import flatten from 'ramda/src/flatten';
import uniq from 'ramda/src/uniq';

export const getTags = pipe(pluck('tags'), flatten, uniq);

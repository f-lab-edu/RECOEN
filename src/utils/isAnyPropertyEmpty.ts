import pipe from 'ramda/src/pipe';
import values from 'ramda/src/values';
import isEmpty from 'ramda/src/isEmpty';
import any from 'ramda/src/any';

export const isAnyPropertyEmpty = pipe(values, any(isEmpty));

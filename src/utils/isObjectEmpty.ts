import pipe from 'ramda/src/pipe';
import values from 'ramda/src/values';
import isEmpty from 'ramda/src/isEmpty';
import any from 'ramda/src/any';

export const isObjectEmpty = pipe(values, any(isEmpty));

import { pipe, values, some, isEmpty } from '@fxts/core';

export const isObjectEmpty = (elements: object) =>
  pipe(
    elements,
    values,
    some((element) => isEmpty(element)),
  );

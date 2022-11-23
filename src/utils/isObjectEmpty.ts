import { pipe, values, some, isEmpty } from '@fxts/core';

export const isObjectEmpty = <T extends object>(elements: T) =>
  pipe(
    elements,
    values,
    some((element) => isEmpty(element)),
  );

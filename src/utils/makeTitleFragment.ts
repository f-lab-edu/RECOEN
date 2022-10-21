export const makeTitleFragment = (str: string) => {
  return str.replaceAll(' ', '-').replaceAll('?', '');
};

export const convertDateFormat = (date: string | undefined) => {
  if (!date) return;
  const newDate = new Date(date);
  const convertedDate = newDate
    .toISOString()
    .substring(0, 10)
    .replace(/-/g, '.');
  return convertedDate;
};

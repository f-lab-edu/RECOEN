export const getDayMonth = (dateInfo: string) => {
  const date = new Date(dateInfo);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return {
    day: date.getDate(),
    month: months[date.getMonth()],
  };
};

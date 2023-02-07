import { getDayMonth } from '../getDayMonth';

describe('getDayMonth', () => {
  it('제대로 된 day와 Month 값을 출력해야한다', () => {
    const dateInfo = '2023-02-08T00:00:00.000Z';
    const { day, month } = getDayMonth(dateInfo);

    expect(day).toBe(8);
    expect(month).toBe('Feb');
  });
});

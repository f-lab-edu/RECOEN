import { convertDateFormat } from '../convertDateFormat';

const createAt = '2022-12-26';

describe('convertDateFormat', () => {
  it('-로 들어온 날짜 데이터를 .로 바꿔준다.', () => {
    expect(convertDateFormat(createAt)).toBe('2022.12.26');
  });
});

import { render } from '@testing-library/react';
import Time from './Time';

describe('Time', () => {
  const renderTime = () =>
    render(<Time createdAt={'2021-02-02T12:00:00.000Z'} />);
  context('시간이 들어오면', () => {
    it('날짜와 월이 화면에 나타난다.', () => {
      const { getByText } = renderTime();
      expect(getByText('2')).toBeInTheDocument();
      expect(getByText('Feb')).toBeInTheDocument();
    });
  });
});

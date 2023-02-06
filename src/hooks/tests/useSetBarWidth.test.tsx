import { render, cleanup } from '@testing-library/react';
import { useSetBarWidth } from '../useSetBarWidth';

describe('useSetBarWidth', () => {
  afterEach(cleanup);

  it('should return the correct bar width', () => {
    const TestHook = ({ hook }: { hook: any }) => {
      const { ref } = hook();

      return (
        <div ref={ref} style={{ width: '100px' }}>
          Item
        </div>
      );
    };

    const { getByText } = render(<TestHook hook={useSetBarWidth} />);

    expect(getByText('Item')).toHaveStyle('width: 100px');
  });
});

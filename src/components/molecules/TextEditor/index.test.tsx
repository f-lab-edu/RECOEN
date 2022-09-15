import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { TextEditor } from './index';
import '@testing-library/jest-dom/extend-expect';

describe('<TextEditor />', () => {
  it('renders TextEditor component correctly', async () => {
    const onChange = jest.fn();

    const { container } = render(<TextEditor onChange={onChange} />);

    await waitFor(() =>
      expect(container.firstChild).toHaveClass('toastui-editor-defaultUI'),
    );
  });
});

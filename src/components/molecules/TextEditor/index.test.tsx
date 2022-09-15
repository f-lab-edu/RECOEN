import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { TextEditor } from './index';
import '@testing-library/jest-dom/extend-expect';

describe('<TextEditor />', () => {
  it('renders TextEditor component correctly', async () => {
    const Wrapper = () => {
      const [content, setContent] = useState<string>();
      return <TextEditor onChange={setContent} />;
    };

    const { getByPlaceholderText } = render(<Wrapper />);

    const lazyContent = await waitFor(() =>
      getByPlaceholderText(/hello react editor world!/),
    );

    expect(lazyContent).toBeInTheDocument();
  });
});

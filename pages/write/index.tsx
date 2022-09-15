import { useState } from 'react';
import { TextEditor } from 'src/components/molecules';

const WriteContainer = () => {
  const [content, setContent] = useState<string>();
  return <TextEditor onChange={setContent} />;
};

export default WriteContainer;

import { useState } from 'react';
import { TextEditor } from 'src/components/molecules';

const WriteContainer = () => {
  const [content, setContent] = useState<string>();
  console.log(content);
  return <TextEditor onChange={setContent} />;
};

export default WriteContainer;

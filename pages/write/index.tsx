import { useState } from 'react';
import { TextEditor } from 'src/components/molecules';
import axios from 'axios';

const WriteContainer = () => {
  const [content, setContent] = useState<string>();
  const handleCreate = () => {
    axios
      .post('/api/article/create', {
        content,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={handleCreate}>생성하기</button>
      <TextEditor onChange={setContent} />
    </>
  );
};

export default WriteContainer;

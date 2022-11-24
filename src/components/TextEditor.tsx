import React, { useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import { useS3Upload } from 'next-s3-upload';

import { UseArticleElement } from 'src/types/article';

interface Props {
  useArticleElement: UseArticleElement;
}

const TextEditor: React.FC<Props> = ({ useArticleElement }) => {
  const editorRef = useRef<Editor>();
  const { uploadToS3 } = useS3Upload();
  const { articleElements, setArticleElement } = useArticleElement();

  const handleChange = () => {
    if (!editorRef.current) return;
    const markDownData = editorRef.current.getInstance().getMarkdown();
    setArticleElement({ content: markDownData });
  };

  const uploadImage = async (
    blob: any,
    callback: (url: string, text: string) => void,
  ) => {
    const { url } = await uploadToS3(blob);
    callback(url, 'alt text');
  };

  useEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.getInstance().setMarkdown(articleElements.content);
  }, [articleElements.content]);

  return (
    <Editor
      ref={editorRef as React.MutableRefObject<Editor>}
      onChange={handleChange}
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="100vh"
      initialEditType="markdown"
      useCommandShortcut={true}
      theme="dark"
      hooks={{
        addImageBlobHook: async (blob, callback) => uploadImage(blob, callback),
      }}
    />
  );
};

export default TextEditor;

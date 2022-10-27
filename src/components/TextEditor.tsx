import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import { useS3Upload } from 'next-s3-upload';

export interface TextEditorProps extends EditorProps {
  onChange(value: string): void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onChange }) => {
  const editorRef = useRef<Editor>();
  const { uploadToS3 } = useS3Upload();

  const handleChange = () => {
    if (!editorRef.current) return;
    const markDownData = editorRef.current.getInstance().getMarkdown();
    onChange(markDownData);
  };

  const uploadImage = async (
    blob: any,
    callback: (url: string, text: string) => void,
  ) => {
    const { url } = await uploadToS3(blob);
    callback(url, 'alt text');
  };

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

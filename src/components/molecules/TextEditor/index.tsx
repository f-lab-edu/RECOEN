import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';

export interface TextEditorProps extends EditorProps {
  onChange(value: string): void;
}

const EditorWithForwardedRef = React.forwardRef<
  Editor | undefined,
  TextEditorProps
>((props, ref) => (
  <Editor {...props} ref={ref as React.MutableRefObject<Editor>} />
));

const TextEditor: React.FC<TextEditorProps> = ({ onChange }) => {
  const editorRef = useRef<Editor>();
  const handleChange = () => {
    if (!editorRef.current) return;
    const markDownData = editorRef.current.getInstance().getMarkdown();
    onChange(markDownData);
  };
  return (
    <EditorWithForwardedRef
      ref={editorRef}
      onChange={handleChange}
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      theme="dark"
    />
  );
};

export default TextEditor;

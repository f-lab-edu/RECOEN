/* eslint-disable react/display-name */
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { EditorPropsWithForwardedProps } from './EditorWrapper';

interface TextEditorProps extends EditorProps {
  onChange(value: string): void;
}

const Editor = dynamic<EditorPropsWithForwardedProps>(
  () => import('./EditorWrapper'),
  {
    ssr: false,
  },
);

const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  TextEditorProps
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

export const TextEditor: React.FC<TextEditorProps> = ({ onChange }) => {
  const editorRef = useRef<EditorType>();
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
    />
  );
};

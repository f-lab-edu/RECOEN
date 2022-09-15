/* eslint-disable react/display-name */
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { EditorPropsWithForwardedProps } from './EditorWrapper';

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<EditorPropsWithForwardedProps>(
  () => import('./EditorWrapper'),
  {
    ssr: false,
  },
);

const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

export const TextEditor = () => {
  const editorRef = useRef<EditorType>();
  const [editorState, setEditorState] = useState<string>();
  useEffect(() => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  }, [editorState]);
  return (
    <EditorWithForwardedRef
      ref={editorRef}
      onChange={setEditorState}
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

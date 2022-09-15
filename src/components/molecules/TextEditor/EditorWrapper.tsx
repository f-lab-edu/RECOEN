import React from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';

export interface EditorPropsWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const EditorWrapper = (props: EditorPropsWithForwardedProps) => {
  return <Editor {...props} ref={props.forwardedRef} />;
};

export default EditorWrapper;

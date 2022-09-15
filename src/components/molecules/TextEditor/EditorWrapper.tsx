import React from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';

export interface EditorPropsWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const EditorWrapper: React.FC<EditorPropsWithForwardedProps> = ({
  forwardedRef,
  ...rest
}) => {
  return <Editor {...rest} ref={forwardedRef} />;
};

export default EditorWrapper;

import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { EditorProps } from '@toast-ui/react-editor';

const Editor = dynamic<EditorProps>(
  () => import('@toast-ui/react-editor').then((m) => m.Editor),
  { ssr: false },
);

export const TextEditor = () => {
  return (
    <Editor
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

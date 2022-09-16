import dynamic from 'next/dynamic';
export const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
});

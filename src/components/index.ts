import dynamic from 'next/dynamic';
export const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
});
export * from './article';
export * from './ImageUpload';
export * from './modals';
export * from './ui';
export * from './Inputs';
export * from './quoteSlider';
export * from './DropDown';
export * from './hero';

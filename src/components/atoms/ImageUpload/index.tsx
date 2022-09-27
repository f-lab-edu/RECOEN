/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useS3Upload } from 'next-s3-upload';
import { compressImage } from 'src/utils';
import { usePreview } from 'src/hooks';

interface Props {
  setImageUrl: (e: string) => void;
}

export const ImageUpload = ({ setImageUrl }: Props) => {
  const [preview, setPreview] = usePreview();
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = async (file: File) => {
    setPreview(file);
    const compressedImage = await compressImage(file);
    const { url } = await uploadToS3(compressedImage);
    setImageUrl(url);
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />
      <button onClick={openFileDialog}>Upload file</button>
      {preview && (
        <img src={preview} alt="preview image" width="200" height="200" />
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Modal } from 'src/components/atoms';
import { useS3Upload } from 'next-s3-upload';
import { compressImage } from 'src/utils';

export const CreateArticleModal = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = async (file: File) => {
    const compressedImage = await compressImage(file);
    const { url } = await uploadToS3(compressedImage);
    setImageUrl(url);
  };

  return (
    <Modal>
      <div>
        <FileInput onChange={handleFileChange} />
        <button onClick={openFileDialog}>Upload file</button>
      </div>
    </Modal>
  );
};

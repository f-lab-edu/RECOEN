import React, { useState } from 'react';
import { Modal } from 'src/components/atoms';
import { useS3Upload } from 'next-s3-upload';

export const CreateArticleModal = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const handleFileChange = async (file: File) => {
    const { url } = await uploadToS3(file);
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

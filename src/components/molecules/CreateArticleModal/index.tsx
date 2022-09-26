import React, { useState } from 'react';
import { Modal } from 'src/components/atoms';
import { ImageUpload } from 'src/components/atoms';

export const CreateArticleModal = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  return (
    <Modal>
      <ImageUpload setImageUrl={setImageUrl} />
    </Modal>
  );
};

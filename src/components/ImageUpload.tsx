/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useS3Upload } from 'next-s3-upload';
import { compressImage } from 'src/utils';
import { usePreview } from 'src/hooks';
import styled from '@emotion/styled';

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
      {!preview && <UploadBox onClick={openFileDialog}>Upload file</UploadBox>}
      {preview && (
        <Img src={preview} alt="preview image" width="200" height="200" />
      )}
    </div>
  );
};

const UploadBox = styled.button`
  width: 350px;
  height: 220px;
  border: 1px solid #494c56;
  background-color: #303236;
  color: #494c56;
  cursor: pointer;
  margin-bottom: 128px;
`;

const Img = styled.img`
  width: 350px;
  height: 220px;
`;
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useS3Upload } from 'next-s3-upload';
import { compressImage } from 'src/utils';
import { usePreview } from 'src/hooks';
import styled from '@emotion/styled';
import { client } from 'src/utils';
import { ImageUrl } from './CreateArticleModal';

interface Props {
  setImgUrl: (e: ImageUrl) => void;
}

export const ImageUpload = ({ setImgUrl }: Props) => {
  const [preview, setPreview] = usePreview();
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = async (file: File) => {
    setPreview(file);
    const compressedImage = await compressImage(file);
    const { url: imgUrl } = await uploadToS3(compressedImage);
    const { data: blurDataURL } = await client.post('/api/base64', { imgUrl });
    setImgUrl({ imgUrl, blurDataURL });
  };

  return (
    <div>
      <FileInput data-testid="fileinput" onChange={handleFileChange} />
      {preview ? (
        <Img src={preview} alt="preview image" width="200" height="200" />
      ) : (
        <UploadBox onClick={openFileDialog}>이미지 추가</UploadBox>
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

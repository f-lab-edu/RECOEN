import { useState, useEffect, useMemo } from 'react';

export const usePreview = () => {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState<any>(); // NOTE : any 수정

  const reader = useMemo(() => {
    return new FileReader();
  }, []);

  useEffect(() => {
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    }
  }, [reader, file]);

  return [preview, setFile] as const;
};

import { useState, useEffect } from 'react';

// 해상도에 맞게 감지하는 훅
export const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(1200);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setViewportWidth(window.innerWidth);
    }
  }, []);

  return viewportWidth;
};

export default useViewportWidth;

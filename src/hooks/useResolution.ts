import { useState, useEffect } from 'react';

// call in Global Component and inject to Context

// 해상도에 맞게 감지하는 훅
export const useResolution = () => {
  const [resolution, setResolution] = useState<'MOBILE' | 'TABLET' | 'DESKTOP'>(
    'DESKTOP',
  );
  useEffect(() => {
    const ev = () => {
      if (window.innerWidth <= 768) {
        return setResolution('MOBILE');
      } else if (window.innerWidth <= 1199) {
        return setResolution('TABLET');
      } else if (window.innerWidth >= 1200) {
        return setResolution('DESKTOP');
      }
    };
    window.addEventListener('resize', ev);

    return () => {
      window.removeEventListener('resize', ev);
    };
  }, []);

  return resolution;
};

export default useResolution;

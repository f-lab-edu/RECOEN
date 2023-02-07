import { useRef, useState, useEffect } from 'react';

export const useSetBarWidth = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [barWidth, setBarWidth] = useState<number>();

  useEffect(() => {
    if (ref.current) {
      setBarWidth(ref.current.offsetWidth - 2);
    }
  }, [ref]);

  return { ref, barWidth };
};

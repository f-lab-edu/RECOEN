import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { detailPageState } from 'src/recoil/article';
import { useRouter } from 'next/router';

export const useResetDetailPageState = () => {
  const resetDetailStates = useResetRecoilState(detailPageState);
  const router = useRouter();
  useEffect(() => {
    return () => {
      router.beforePopState(() => {
        resetDetailStates();
        return true;
      });
    };
  }, []);
};

import React from 'react';

import WritePageContainer from 'src/components/container/WritePageContainer';
import MobileWritePage from 'src/components/container/MobileWritePage';
import { useDetectResolution } from 'src/hooks';

const WritePage = () => {
  const resolution = useDetectResolution();
  if (resolution == 'DESKTOP') return <WritePageContainer />;
  return <MobileWritePage />;
};

export default WritePage;

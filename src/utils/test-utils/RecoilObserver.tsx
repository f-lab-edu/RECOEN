import { useEffect } from 'react';
import { RecoilState, useRecoilValue } from 'recoil';

type Props = {
  node: RecoilState<any>;
  onChange: (value: RecoilState<any>) => void;
};

export const RecoilObserver: React.FC<Props> = ({ node, onChange }) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

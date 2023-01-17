import Link from 'next/link';
import styled from '@emotion/styled';
import Button from 'src/components/ui/Button/Button';

import { useSession, signOut } from 'next-auth/react';
import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

const LoginButton = () => {
  const { data: session } = useSession();
  const handleOpenModal = useHandleOpenModal();

  return (
    <ButtonWrapper>
      {session ? (
        <>
          <Button label="로그아웃" onClick={signOut} />
          <Link href="/write" title="작성하기 페이지입니다.">
            {session.isAdmin && <Button label="+ 글쓰기" primary />}
          </Link>
        </>
      ) : (
        <Button
          label="로그인"
          primary
          onClick={() => handleOpenModal('LOGIN')}
        />
      )}
    </ButtonWrapper>
  );
};

export default LoginButton;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

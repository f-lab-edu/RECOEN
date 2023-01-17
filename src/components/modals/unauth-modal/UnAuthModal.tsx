import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image';

import GoogleLogo from '../../../../public/google-logo.png';
import GithubLogo from '../../../../public/github-logo.png';

import BaseModal from '../base-modal/BaseModal';
import Button from 'src/components/ui/Button/Button';

import { theme } from 'src/style';

import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

const UnAuthModal = () => {
  const router = useRouter();
  const handleOpenModal = useHandleOpenModal();

  const handleClose = () => {
    router.push('/');
    handleOpenModal(null);
  };

  return (
    <BaseModal handleOpenModal={() => null}>
      <Container>
        <Text>해당 페이지를 이용할 수 있는 권한이 없습니다.</Text>
        <GoogleButton onClick={() => signIn('google')}>
          <Image
            src={GoogleLogo}
            alt="google-logo"
            width="30"
            height="30"
            style={{ position: 'absolute', left: '12px' }}
          />
          Google로 로그인하기
        </GoogleButton>
        <GitHubButton>
          <Image
            src={GithubLogo}
            alt="github-logo"
            width="30"
            height="30"
            style={{ position: 'absolute', left: '12px' }}
          />
          Github으로 로그인하기
        </GitHubButton>
        <ButtonWrapper>
          <Button label="다음에 할게요" onClick={handleClose} />
        </ButtonWrapper>
      </Container>
    </BaseModal>
  );
};

export default UnAuthModal;

const Text = styled.div`
  color: ${theme.color.white};
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 30px 0;
`;

const Container = styled.div`
  width: 440px;
  height: 350px;
  background: ${theme.color.background_2};
  padding: 35px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const commonStyle = `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:60px;
  border:none;
  margin-bottom:10px;
  font-weight:600;
  font-size:1rem;
  border-radius:8px;
  cursor:pointer;
`;

const GoogleButton = styled.button`
  background: ${theme.color.white};
  color: ${theme.color.black};
  ${commonStyle}
`;

const GitHubButton = styled.button`
  background: ${theme.color.black};
  color: ${theme.color.white};
  ${commonStyle}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

import React from 'react';
import BaseModal from '../BaseModal/BaseModal';
import styled from '@emotion/styled';
import { theme } from 'src/style';

import Image from 'next/image';
import Button from 'src/components/ui/Button/Button';

import GoogleLogo from '../../../../public/google-logo.png';
import GithubLogo from '../../../../public/github-logo.png';

import { signIn } from 'next-auth/react';
import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

const LoginModal = () => {
  const handleOpenModal = useHandleOpenModal();
  return (
    <BaseModal handleOpenModal={() => handleOpenModal(null)}>
      <Container>
        <Text>로그인</Text>
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
          <Button label="다음에 할게요" onClick={() => handleOpenModal(null)} />
        </ButtonWrapper>
      </Container>
    </BaseModal>
  );
};

export default LoginModal;

const Text = styled.div`
  color: ${theme.color.white};
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
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
font-size:15px;
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

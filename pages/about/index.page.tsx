/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'src/style/theme';
import Image from 'next/image';
import profileImage from '../../public/profile.png';
import { FaGithub } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <Container>
      <Title>About</Title>
      <Content>
        <Profile>
          <Image
            src={profileImage}
            alt="profile-image"
            width={192}
            height={192}
            style={{ borderRadius: '50%' }}
          />
          <Name>노예찬</Name>
          <Text>Frontend Engineer</Text>
          <Text>Seoul, Korea</Text>
          <IconBox>
            <Link href="https://github.com/noy3928" target="_blank">
              <FaGithub style={{ color: 'white' }} />
            </Link>
            <Link href="mailto:shdpcks95@gmail.com">
              <AiFillMail style={{ color: 'white' }} />
            </Link>
          </IconBox>
        </Profile>
        <Desc>
          안녕하세요 프론트엔드 엔지니어 노예찬입니다. <br />
          <br /> 시각적이면서, 사람들에게 활용될 수 있는것을 만든다는 매력에
          빠져 프론트엔드를 시작했다가, 현재는 더 나은 설계를 만들어가는 과정에
          흥미를 느끼고 있습니다. 독서를 적당히 즐기는 편입니다. 인생 책은
          "그리스인 조르바". 롤모델도 조르바입니다. 좋아하는 음식은 돈까스,
          햄버거. 즐기는 운동은 주짓수. 의외로 공감능력을 장착한 INTP입니다.
          <br />
          <br />
          세상은 기본적으로 맛있는 것이라는 신념을 가지고 있으며, 저는 이것을
          음미하는 중입니다.
        </Desc>
      </Content>
    </Container>
  );
};

export default AboutPage;

const Container = styled.div`
  width: 1200px;
  padding: 0 30px;
  margin: 0px auto;

  @media screen and (max-width: 1200px) {
    width: calc(100% - 60px);
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 60px);
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.color.gray100};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Name = styled.h2`
  padding: 20px 0;
`;

const Text = styled.div`
  color: ${theme.color.gray100};
`;

const Desc = styled.p`
  display: flex;
  align-items: center;
  font-weight: 200;
  color: ${theme.color.gray100};
  grid-column: span 2 / span 2;
  margin-top: 40px;
  transition: 0.2s ease-in-out;
  :hover {
    color: ${theme.color.white};
  }
`;

const IconBox = styled.div`
  padding-top: 15px;
  display: flex;
  font-size: 1.5rem;
  gap: 10px;
  color: ${theme.color.white};
`;

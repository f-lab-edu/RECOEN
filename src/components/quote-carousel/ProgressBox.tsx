import Image from 'next/image';
import styled from '@emotion/styled';
import LeftArrow from '../../../public/leftArrow.png';
import RigthArrow from '../../../public/rightArrow.png';

interface Props {
  currentSlide: number;
  setCurrentSlide: (currentSlide: number) => void;
  totalSlides: number;
}

const ProgressBox = ({ currentSlide, setCurrentSlide, totalSlides }: Props) => {
  const NextSlide = () => {
    if (currentSlide >= totalSlides) return;
    setCurrentSlide(currentSlide + 1);
  };

  const PrevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <Container>
      <NumBox>
        <CurrentNum data-testid="currentNum">0{currentSlide + 1}</CurrentNum>
        <StyledHyphen />
        <TotalNum>0{totalSlides + 1}</TotalNum>
      </NumBox>
      <StyleImage
        onClick={PrevSlide}
        src={LeftArrow}
        width={50}
        height={50}
        alt="Left Arrow"
      />
      <StyleImage
        data-testid="nextSlideButton"
        onClick={NextSlide}
        src={RigthArrow}
        width={50}
        height={50}
        alt="Rigth Arrow"
      />
    </Container>
  );
};

export default ProgressBox;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  box-sizing: content-box;
  height: 50px;
  width: 100%;
`;

const NumBox = styled.div`
  display: flex;
  align-items: center;
`;

const TotalNum = styled.div`
  color: #494c56;
  font-size: 1.1rem;
`;

const StyledHyphen = styled.div`
  height: 0.5px;
  width: 1.1rem;
  background-color: #494c56;
  margin: 5px;
`;

const CurrentNum = styled.div`
  color: #9499a1;
  font-size: 1.1rem;
`;

const StyleImage = styled(Image)`
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

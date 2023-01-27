import styled from '@emotion/styled';
import { getDayMonth } from 'src/utils';

interface Props {
  createdAt: string;
}

const Time = ({ createdAt }: Props) => {
  const date = getDayMonth(createdAt);

  return (
    <DateContainer>
      <Day>{date.day}</Day>
      <Month>{date.month}</Month>
    </DateContainer>
  );
};

export default Time;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Day = styled.div`
  font-size: 2.3rem;
`;

const Month = styled.div`
  font-size: 1.5rem;
`;

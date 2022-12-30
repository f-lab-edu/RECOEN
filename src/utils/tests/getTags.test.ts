import { getTags } from '../getTags';

const articleList = [
  {
    _id: '635d1b9b9edb64eb1ae92233',
    title: 'React Fiber 딥다이브',
    description:
      "도대체 virtual dom이 real dom보다 왜 성능이 더 좋은거지? 이 말은 사실일까? 'virtual dom'의 어떤 부분이 real dom을 사용하는 것보다 성능을 더 좋게 만드는 것일까?",
    tags: ['react', 'javascript'],
    content: '리액트를 다루고 공부하면서, 문득 이런 질문이 생겼습니다.',
    imgUrl:
      'https://recoen.s3.ap-northeast-2.amazonaws.com/next-s3-uploads/a34e868d-0487-4d4b-893c-f489897e8d96/julien-tromeur-EWg1-0UjeWY-unsplash.jpg',
  },
  {
    _id: '635d1b9b9edb64eb1ae92233',
    title: '이미지 성능최적화',
    description: '이미지 리소스를 최적화해봅시다',
    tags: ['react', 'javascript', 'performance'],
    content: '이미지 리소스를 최적화하는 것은 중요합니다',
    imgUrl:
      'https://recoen.s3.ap-northeast-2.amazonaws.com/next-s3-uploads/a34e868d-0487-4d4b-893c-f489897e8d96/julien-tromeur-EWg1-0UjeWY-unsplash.jpg',
  },
];

describe('getTags', () => {
  it('article list에서 중복없이 tags만 뽑아내야한다.', () => {
    console.log(getTags(articleList));
    expect(getTags(articleList)).toStrictEqual([
      'react',
      'javascript',
      'performance',
    ]);
  });
});

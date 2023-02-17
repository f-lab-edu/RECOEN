import { ArticleElement, ViewArticleElement } from 'src/types/article';

export const article: ArticleElement = {
  title: '리액트 fiber에 대해서 알아보자',
  description: '리액트 fiber에 대해서 설명하는 글입니다',
  tags: ['태그1', '태그2'],
  imgUrl: 'http://image.com',
  content: 'fiber는 새로운 렌더링 알고리즘입니다.',
  createdAt: '2022-12-26',
  category: 'programming',
};

export const viewArticle: ViewArticleElement = {
  _id: '60a7e6f1c6e7b6d8f6f0f6f2',
  title: '리액트 fiber에 대해서 알아보자',
  description: '리액트 fiber에 대해서 설명하는 글입니다',
  tags: ['태그1', '태그2'],
  imgUrl: 'http://image.com',
  content: 'fiber는 새로운 렌더링 알고리즘입니다.',
  createdAt: '2022-12-26',
  category: 'programming',
  blurDataURL: 'http://image.com',
};

export const viewArticleList: ViewArticleElement[] = [
  {
    title: '리액트 fiber에 대해서 알아보자',
    description: '리액트 fiber에 대해서 설명하는 글입니다',
    tags: ['태그1', '태그2'],
    imgUrl: 'http://image.com',
    content: 'fiber는 새로운 렌더링 알고리즘입니다.',
    createdAt: '2022-12-26',
    category: 'programming',
    blurDataURL: 'http://image.com',
  },
  {
    title: '리액트 fiber에 대해서 알아보자',
    description: '리액트 fiber에 대해서 설명하는 글입니다',
    tags: ['태그2'],
    imgUrl: 'http://image.com',
    content: 'fiber는 새로운 렌더링 알고리즘입니다.',
    createdAt: '2022-12-26',
    category: 'book',
    blurDataURL: 'http://image.com',
  },
  {
    title: '리액트 fiber에 대해서 알아보자',
    description: '리액트 fiber에 대해서 설명하는 글입니다',
    tags: ['태그1'],
    imgUrl: 'http://image.com',
    content: 'fiber는 새로운 렌더링 알고리즘입니다.',
    createdAt: '2022-12-26',
    category: 'book',
    blurDataURL: 'http://image.com',
  },
];

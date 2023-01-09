import { NextRouter } from 'next/router';

export const mockRouter: NextRouter = {
  pathname: '',
  query: { id: undefined },
  route: '',
  asPath: '',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  basePath: '',
  locale: undefined,
  locales: undefined,
  defaultLocale: undefined,
  domainLocales: undefined,
  isLocaleDomain: false,
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  isReady: false,
  isPreview: false,
};

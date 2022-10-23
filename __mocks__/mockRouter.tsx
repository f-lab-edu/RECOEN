import React from 'react';
import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export function mockRouter(
  tree: React.ReactElement,
  router: Partial<NextRouter>,
) {
  const {
    route = '',
    pathname = '',
    query = {},
    asPath = '',
    basePath = '',
    isLocaleDomain = true,
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
    isReady = false,
    isPreview = false,
  } = router;

  return (
    <RouterContext.Provider
      value={{
        route,
        pathname,
        query,
        asPath,
        push,
        replace,
        reload,
        back,
        prefetch,
        beforePopState,
        isFallback,
        events,
        basePath,
        isLocaleDomain,
        isReady,
        isPreview,
      }}
    >
      {tree}
    </RouterContext.Provider>
  );
}

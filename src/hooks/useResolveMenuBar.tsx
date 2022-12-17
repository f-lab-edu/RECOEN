import useResolution, { MenuBar } from './useResolution';
import { useRouter } from 'next/router';

import WritePageMenus from 'src/components/navigation/WritePageMenus/WritePageMenus';
import Menus from 'src/components/navigation/Menus/Menus';
import MobileMenu from 'src/components/navigation/mobile-menu/MobileMenu';

export const useResolveMenuBar = () => {
  const resolution = useResolution();
  const router = useRouter();

  const resolveMenuBar = () => {
    if (router.pathname.includes('/write')) return <WritePageMenus />;
    else return <Menus />;
  };

  const mapMenuBar: { [key in MenuBar]: React.ReactElement | null } = {
    DESKTOP: resolveMenuBar(),
    TABLET: <MobileMenu />,
    MOBILE: <MobileMenu />,
    EMPTY: null,
  };

  return mapMenuBar[resolution];
};

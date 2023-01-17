import { useSession } from 'next-auth/react';

type Session = { isLogin: boolean; isAdmin: boolean };

export const mockUseSession = ({ isLogin, isAdmin }: Session) => {
  (useSession as jest.Mock).mockImplementation(() => {
    if (isLogin) return { data: { isAdmin } };
    else return { data: isLogin };
  });
};

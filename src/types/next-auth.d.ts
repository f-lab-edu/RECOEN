import { Session } from 'inspector';
import NextAuth, {
  DefaultSession,
  Account,
  User,
  CallbacksOptions,
} from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    isAdmin: boolean;
  }
}

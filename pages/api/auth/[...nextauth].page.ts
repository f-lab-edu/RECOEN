import NextAuth, { Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      if (!session?.user?.email) return session;

      const administrators = ['shdpcks95@gmail.com'];
      session.isAdmin = administrators.includes(session.user.email);

      return session;
    },
  },
};

export default NextAuth(authOptions);

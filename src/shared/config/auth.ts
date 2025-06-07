import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import NextAuth, { type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { prisma } from './prisma/prisma';

declare module 'next-auth' {
  interface Session {
    user: {
      avatar?: string | null;
      companyName?: string | null;
    } & DefaultSession['user'];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = credentials;

        if (typeof email !== 'string' || typeof password !== 'string') {
          return null;
        }

        const userExists = await prisma.user.findUnique({ where: { email } });

        if (!userExists) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          password,
          userExists?.passwordHash,
        );

        if (!isPasswordValid) {
          return null;
        }

        user = {
          email: userExists.email,
          companyName: userExists.companyName,
          avatar: userExists.imageUrl,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      // console.log('JWT Callback:', { token, user });
      if (user) {
        // User is available during sign-in
        token.avatar = user.avatar;
      }
      return token;
    },
    session({ session, token }) {
      // console.log('Session Callback:', { session, token });
      session.user.avatar = token.avatar;
      return session;
    },
  },
});

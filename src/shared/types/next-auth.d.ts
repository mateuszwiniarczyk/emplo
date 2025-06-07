import { DefaultSession } from 'next-auth';
import { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    avatar: string | null;
    companyName: string;
    email: string;
  }

  interface Session {
    user: User & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    avatar: string | null;
    companyName: string;
    email: string;
  }
}

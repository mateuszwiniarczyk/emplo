import Link from 'next/link';

import { auth } from '@/shared/config/auth';
import LogoIcon from '~/logo.svg';

import { AuthenticatedActions } from './authenticated-actions';
import { GuestActions } from './guest-actions';

export const Header = async () => {
  const session = await auth();

  return (
    <header className="border-b border-gray-200">
      <div className="container flex items-center py-5 md:h-20 md:py-3.5">
        <Link href="/" className="flex items-center">
          <span className="sr-only">Home</span>
          <LogoIcon className="h-9 w-9" />
        </Link>
        {session ? <AuthenticatedActions /> : <GuestActions />}
      </div>
    </header>
  );
};

'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import LogoIcon from '~/logo.svg';

import { AuthenticatedActions } from './authenticated-actions';
import { GuestActions } from './guest-actions';

export const Header = () => {
  const { data } = useSession();

  return (
    <header className="border-b border-gray-200">
      <div className="container flex items-center py-5 md:h-20 md:py-3.5">
        <Link href="/" className="flex items-center">
          <span className="sr-only">Home</span>
          <LogoIcon className="h-9 w-9" />
        </Link>
        {data ? <AuthenticatedActions /> : <GuestActions />}
      </div>
    </header>
  );
};

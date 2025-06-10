import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { Button } from '@/shared';

import { UserDropdown } from './user-dropdown';

export const AuthenticatedActions = () => {
  const { data } = useSession();
  return (
    <>
      <Button className="ml-auto" size="sm" asChild>
        <Link href="/create-offer">Create Offer</Link>
      </Button>

      <UserDropdown
        avatar={data?.user.avatar || ''}
        companyName={data?.user.companyName || ''}
      />
    </>
  );
};

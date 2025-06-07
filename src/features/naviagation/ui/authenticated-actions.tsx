import Link from 'next/link';

import { auth, Button } from '@/shared';

import { UserDropdown } from './user-dropdown';

export const AuthenticatedActions = async () => {
  const session = await auth();
  return (
    <>
      <Button className="ml-auto" size="sm" asChild>
        <Link href="/create-offer">Create Offer</Link>
      </Button>

      <UserDropdown
        avatar={session?.user.avatar || ''}
        companyName={session?.user.companyName || ''}
      />
    </>
  );
};

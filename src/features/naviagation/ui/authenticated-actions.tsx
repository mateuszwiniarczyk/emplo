import Link from 'next/link';

import { auth, Button } from '@/shared';

import { UserDropdown } from './user-dropdown';

export const AuthenticatedActions = async () => {
  const data = await auth();
  return (
    <>
      <Button className="ml-auto" size="sm" asChild>
        <Link href="/offer/create-offer">Create Offer</Link>
      </Button>

      <UserDropdown
        avatar={data?.user.avatar || ''}
        companyName={data?.user.companyName || ''}
      />
    </>
  );
};

import Link from 'next/link';

import { Button } from '@/shared';

export const GuestActions = () => {
  return (
    <>
      <>
        <Button className="ml-auto" size="sm" variant="outline" asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button className="ml-4" size="sm" asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </>
    </>
  );
};

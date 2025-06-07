'use client';

import { useActionState } from 'react';

import { Button } from '@/shared';
import { FormField } from '@/shared/ui/form-field';

import { signIn } from '../api/sign-in';

export const SignInForm = () => {
  const [state, formAction, isPending] = useActionState(signIn, null);
  const { error, data } = state || {};

  return (
    <form className="space-y-4" action={formAction}>
      <FormField
        name="email"
        placeholder="Email address"
        type="email"
        error={error?.email?.[0]}
        defaultValue={(data?.payload?.email || '') as string}
      />

      <FormField
        name="password"
        placeholder="Password"
        type="password"
        className="mb-8"
        error={error?.password?.[0]}
        defaultValue={(data?.payload?.password || '') as string}
      />

      <Button className="w-full" size="lg" type="submit" disabled={isPending}>
        {isPending ? 'Loading' : 'Continue'}
      </Button>
    </form>
  );
};

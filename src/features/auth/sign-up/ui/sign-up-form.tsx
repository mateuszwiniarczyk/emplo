'use client';

import { useActionState } from 'react';

import { Button } from '@/shared';
import { FormField } from '@/shared/ui/form-field';

import { signUp } from '../api/sign-up';
import { AvatarUploader } from './avatar-uploader';

export const SignUpForm = () => {
  const [state, formAction, isPending] = useActionState(signUp, null);
  const { error, data } = state || {};

  return (
    <form className="space-y-4" action={formAction}>
      <AvatarUploader />
      <FormField
        name="companyName"
        placeholder="Company name"
        defaultValue={(data?.payload?.companyName || '') as string}
        error={error?.companyName?.[0]}
      />
      <FormField
        name="email"
        placeholder="Email address"
        type="email"
        error={error?.email?.[0]}
        defaultValue={(data?.payload?.email || '') as string}
      />
      <FormField
        name="phoneNumber"
        placeholder="Phone number"
        type="tel"
        error={error?.phoneNumber?.[0]}
        defaultValue={(data?.payload?.phoneNumber || '') as string}
      />
      <FormField
        name="password"
        placeholder="Password"
        type="password"
        error={error?.password?.[0]}
        defaultValue={(data?.payload?.password || '') as string}
      />
      <FormField
        name="passwordConfirmation"
        placeholder="Confirm password"
        type="password"
        error={error?.passwordConfirmation?.[0]}
        defaultValue={(data?.payload?.passwordConfirmation || '') as string}
        className="mb-8"
      />
      <Button className="w-full" size="lg" type="submit" disabled={isPending}>
        {isPending ? 'Loading' : 'Continue'}
      </Button>
    </form>
  );
};

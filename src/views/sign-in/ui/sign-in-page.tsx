import { redirect } from 'next/navigation';

import { SignInForm } from '@/features/auth/sign-in';
import { auth } from '@/shared';

export const SignInPage = async () => {
  const data = await auth();

  if (data) {
    redirect('/');
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-9 border-none shadow-none">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Sign In to your account</h1>
        <p>Enter your details to proceed further</p>
      </div>

      <SignInForm />
    </div>
  );
};

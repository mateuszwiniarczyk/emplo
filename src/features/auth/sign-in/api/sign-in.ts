'use server';

import { redirect } from 'next/navigation';

import { signIn as signInNextAuth } from '@/shared';

import { userSignInSchema } from '../model/schema';

type SignInError = Error & {
  type?: string;
  code?: string;
  digest?: string;
};

export const signIn = async (_: unknown, formData: FormData) => {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const credentials = {
      email,
      password,
    };

    const { success, error } = userSignInSchema.safeParse(credentials);

    if (!success) {
      return {
        success: false,
        error: error.flatten().fieldErrors,
        message: 'Validation failed',
        data: {
          payload: credentials,
        },
      };
    }

    await signInNextAuth('credentials', {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    const authError = error as SignInError;

    if (authError?.type === 'CredentialsSignin') {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred during sign-in',
    };
  }

  redirect('/');
};

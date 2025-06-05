import { SignUpForm } from '@/features/auth/sign-up';

export const SignUpPage = () => (
  <div className="mx-auto w-full max-w-md space-y-9 border-none shadow-none">
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold">Tell us about yourself</h1>
      <p>Enter your details to proceed further</p>
    </div>

    <SignUpForm />
  </div>
);

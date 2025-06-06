import { z } from 'zod';

export const userSignUpDtoSchema = z
  .object({
    companyName: z
      .string()
      .min(2, { message: 'Company name must be at least 2 characters long' })
      .max(25, { message: 'Company name must be at most 25 characters long' }),
    phoneNumber: z
      .string()
      .min(10, { message: 'Phone number must be at least 9 digits' })
      .max(15, { message: 'Phone number must be at most 15 digits' })
      .regex(/^\+?\d+$/, {
        message: 'Phone number must contain only digits and optional leading +',
      }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    passwordConfirmation: z.string().min(8, {
      message: 'Password confirmation must be at least 8 characters long',
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  });

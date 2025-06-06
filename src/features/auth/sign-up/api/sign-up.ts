'use server';
import bcrypt from 'bcrypt';

import { prisma } from '@/shared/config/prisma/prisma';

import { userSignUpDtoSchema } from '../model/schema';

export const signUp = async (_: unknown, formData: FormData) => {
  try {
    const user = {
      companyName: formData.get('companyName'),
      phoneNumber: formData.get('phoneNumber'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirmation: formData.get('passwordConfirmation'),
    };

    const { success, data, error } = userSignUpDtoSchema.safeParse(user);

    if (!success) {
      return {
        success: false,
        error: error.flatten().fieldErrors,
        message: 'Validation failed',
        data: {
          payload: user,
        },
      };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const passwordHash = await bcrypt.hash(data.password, 12);

    await prisma.user.create({
      data: {
        companyName: data.companyName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        passwordHash,
      },
    });

    return {
      success: true,
      message: 'User created successfully',
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      success: false,
      error: undefined,
      message:
        (error as Error).message || 'An error occurred while creating the user',
    };
  }
};

'use server';
import { put } from '@vercel/blob';
import bcrypt from 'bcryptjs';

import { prisma } from '@/shared/config/prisma/prisma';

import { userSignUpSchema } from '../model/schema';

export const signUp = async (_: unknown, formData: FormData) => {
  try {
    const imageFile = formData.get('avatar') as File;
    const blob = await put(imageFile.name, imageFile, {
      access: 'public',
      addRandomSuffix: true,
    });

    const user = {
      companyName: formData.get('companyName'),
      phoneNumber: formData.get('phoneNumber'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirmation: formData.get('passwordConfirmation'),
    };

    const { success, data, error } = userSignUpSchema.safeParse(user);

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
        passwordHash: passwordHash,
        imageUrl: blob.url,
      },
    });

    return {
      success: true,
      message: 'User created successfully',
    };
  } catch (error) {
    return {
      success: false,
      error: undefined,
      message:
        (error as Error).message || 'An error occurred while creating the user',
    };
  }
};

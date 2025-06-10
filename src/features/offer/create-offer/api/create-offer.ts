'use server';

import { revalidateTag } from 'next/cache';

import { auth } from '@/shared';
import { prisma } from '@/shared/config/prisma/prisma';

import { createOfferSchema } from '../model/schema';
import { CreateOfferFormData } from '../model/types';

export const createOffer = async (offer: CreateOfferFormData) => {
  try {
    const session = await auth();

    if (!session?.user) {
      return {
        success: false,
        message: 'Unauthorized',
        data: { payload: offer },
      };
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return {
        success: false,
        message: 'User not found',
        data: { payload: offer },
      };
    }

    const validation = createOfferSchema.safeParse({
      ...offer,
      minSalary: Number(offer.minSalary),
      maxSalary: Number(offer.maxSalary),
    });

    if (!validation.success) {
      console.error(
        'Validation error:',
        validation.error.flatten().fieldErrors,
      );
      return {
        success: false,
        error: validation.error.flatten().fieldErrors,
        message: 'Validation failed',
        data: { payload: offer },
      };
    }

    await prisma.offer.create({
      data: {
        title: validation.data.title,
        description: validation.data.description,
        benefits: validation.data.benefits,
        requirements: validation.data.requirements,
        location: validation.data.location,
        employmentType: validation.data.employmentType,
        minSalary: validation.data.minSalary,
        maxSalary: validation.data.maxSalary,
        tags: validation.data.tags,
        userId: user.id,
      },
    });

    revalidateTag('offers');

    return {
      success: true,
      message: 'Offer created successfully',
    };
  } catch (error) {
    console.error('Error creating offer:', error);
    return {
      success: false,
      message: 'An error occurred while creating the offer',
    };
  }
};

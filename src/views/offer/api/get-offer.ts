import { prisma } from '@/shared/config/prisma/prisma';

export const getOffer = async (id: string) => {
  const offer = await prisma.offer.findFirst({
    where: {
      id,
    },

    select: {
      title: true,
      benefits: true,
      createdAt: true,
      description: true,
      employmentType: true,
      location: true,
      maxSalary: true,
      minSalary: true,
      requirements: true,
      tags: true,
      user: {
        select: {
          companyName: true,
          imageUrl: true,
        },
      },
    },
  });

  return offer || null;
};

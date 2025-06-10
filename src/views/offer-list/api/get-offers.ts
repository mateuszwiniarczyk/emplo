'server-only';
import { unstable_cache } from 'next/cache';

import { prisma } from '@/shared/config/prisma/prisma';

export const getOffers = unstable_cache(
  async (page) => {
    const offset = 5;

    const offers = await prisma.offer.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      take: 5,
      skip: page === 1 ? 0 : page * offset,
      include: {
        user: {
          select: {
            companyName: true,
            imageUrl: true,
          },
        },
      },
    });

    return offers;
  },
  ['offers'],
  {
    tags: ['offers'],
  },
);

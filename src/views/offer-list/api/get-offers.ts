'server-only';
import { unstable_cache } from 'next/cache';

import { prisma } from '@/shared/config/prisma/prisma';

import { OFFERS_PAGE_SIZE } from '../model/constants';

export const getOffers = unstable_cache(
  async (page) => {
    const offers = await prisma.offer.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      take: 5,
      skip: page === 1 ? 0 : page * OFFERS_PAGE_SIZE,
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

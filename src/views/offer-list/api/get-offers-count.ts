import { prisma } from '@/shared/config/prisma/prisma';

export const getOffersCount = async () => {
  return await prisma.offer.count();
};

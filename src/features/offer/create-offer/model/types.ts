import { z } from 'zod';

import { createOfferSchema } from './schema';

export type CreateOfferData = z.infer<typeof createOfferSchema>;

export type CreateOfferFormData = {
  title: string;
  location: string;
  minSalary: string;
  maxSalary: string;
  description: string;
  requirements: string;
  benefits: string;
  tags: string[];
  employmentType: string;
};

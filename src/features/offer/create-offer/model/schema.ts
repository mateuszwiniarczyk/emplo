import { z } from 'zod';

export const createOfferSchema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    location: z.string().min(1, 'Location is required'),
    employmentType: z.string().min(1, 'Employment type is required'),
    minSalary: z.number().min(1, 'Minimum salary must be at least 1'),
    maxSalary: z.number().min(1, 'Maximum salary must be at least 1'),
    description: z.string().min(1, 'Description is required'),
    requirements: z.string().min(1, 'Requirements are required'),
    benefits: z.string().min(1, 'Benefits are required'),
    tags: z.array(z.string()).min(1, 'At least one tag is required'),
  })
  .refine((data) => data.minSalary <= data.maxSalary, {
    message: 'Minimum salary must be less than or equal to maximum salary',
  });

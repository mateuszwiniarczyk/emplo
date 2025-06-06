import { z } from 'zod';

import { userSignUpDtoSchema } from './schema';

export type UserSignUpDto = z.infer<typeof userSignUpDtoSchema>;

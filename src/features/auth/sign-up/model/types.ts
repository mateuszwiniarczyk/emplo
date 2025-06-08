import { z } from 'zod';

import { userSignUpSchema } from './schema';

export type UserSignUp = z.infer<typeof userSignUpSchema>;

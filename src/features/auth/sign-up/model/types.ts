import { z } from 'zod';

import { userSignUpSchema } from './schema';

export type userSignUp = z.infer<typeof userSignUpSchema>;

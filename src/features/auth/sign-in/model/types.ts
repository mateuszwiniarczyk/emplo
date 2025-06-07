import { z } from 'zod';

import { userSignInSchema } from './schema';

export type UserSignIn = z.infer<typeof userSignInSchema>;

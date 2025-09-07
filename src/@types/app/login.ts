import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.email({ error: 'Email is invalid' }),
  rememberMe: z.boolean(),
  password: z
    .string()
    .min(5, { error: 'Password is too short' })
    .superRefine((value, ctx) => {
      if (!/^(?=.*[!@#$%^&*])/.test(value)) {
        ctx.addIssue({
          code: 'custom',
          message: 'One special character required',
          input: value,
        });
      }

      if (!/[A-Z]/.test(value)) {
        ctx.addIssue({
          code: 'custom',
          message: 'One uppercase character required',
          input: value,
        });
      }
    }),
});

export type Login = z.infer<typeof LoginSchema>;

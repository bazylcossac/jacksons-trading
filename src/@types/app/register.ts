import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.email({ error: "Email is invalid" }),
  name: z.string().min(3, { error: "Provide at least 3 characters" }),
  password: z
    .string()
    .min(8, { error: "Password is too short" })
    .superRefine((value, ctx) => {
      if (!/^(?=.*[!@#$%^&*])/.test(value)) {
        ctx.addIssue({
          code: "custom",
          message: "One special character required",
          input: value,
        });
      }

      if (!/[A-Z]/.test(value)) {
        ctx.addIssue({
          code: "custom",
          message: "One uppercase character required",
          input: value,
        });
      }
    }),
});

export type Register = z.infer<typeof RegisterSchema>;

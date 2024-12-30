import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  username: z.string().min(3),
  name: z.string().optional(),
});

export const loginInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

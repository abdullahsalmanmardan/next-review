import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username should not be more than 2 characters")
  .max(20, "Username should not be more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "username should not contain special characters");

export const singUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "invalid email address" }),
  password: z
    .string()
    .min(6, "Password should not be less than 6 characters")
    .max(50, "Password should not be more than 50 characters"),
});

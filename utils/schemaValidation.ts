import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(10, "Full name is required").max(100),
  email: z.string().email({ message: "Email is required" }),
  message: z.string().min(10).max(255),
});

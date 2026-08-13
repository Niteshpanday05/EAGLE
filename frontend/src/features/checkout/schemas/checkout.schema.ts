import { z } from "zod";

export const checkoutSchema = z.object({
  full_name: z
    .string()
    .min(2, "Full name is required"),

  email: z
    .email("Invalid email address"),

  phone: z
    .string()
    .min(7, "Phone number is required"),

  country: z
    .string()
    .min(2),

  province: z
    .string()
    .min(2),

  city: z
    .string()
    .min(2),

  street_address: z
    .string()
    .min(5),

  postal_code: z.string(),

  notes: z.string().optional(),
});

export type CheckoutFormData =
  z.infer<typeof checkoutSchema>;
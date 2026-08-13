import { z } from "zod";

export const addressSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  phone_number: z.string().min(7, "Invalid phone number"),
  country: z.string().min(2),
  state: z.string().min(2),
  city: z.string().min(2),
  postal_code: z.string().optional(),
  address_line_1: z.string().min(5),
  address_line_2: z.string().optional(),
  landmark: z.string().optional(),
});

export type AddressSchema = z.infer<typeof addressSchema>;
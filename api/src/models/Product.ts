import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(100),
  description: z.string().max(500).optional(),
  price: z.number().min(0),
  category: z.string().min(2).max(100),
});

export type Product = z.infer<typeof productSchema>;

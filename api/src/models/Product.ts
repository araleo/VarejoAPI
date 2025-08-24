import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(100),
  description: z.string().max(500).optional(),
  price: z.number().min(0),
  category: z.string().min(2).max(100),
  tags: z.array(z.string().min(1).max(50)).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Product = z.infer<typeof productSchema>;

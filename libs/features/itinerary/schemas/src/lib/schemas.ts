import { z } from 'zod';

export const createItinerarySchema = z.object({
  title: z.string().max(80),
  description: z.string().max(150).optional(),
  startDate: z.string(), // ISO string
  endDate: z.string(), // ISO string
});

export type createItinerarySchemaType = z.infer<typeof createItinerarySchema>;

'use server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@travel-drop/ws-utils';
import { headers } from 'next/headers';
import { createItinerarySchemaType } from '@travel-drop/features-itinerary-schemas';

const prisma = new PrismaClient();

export async function CreateItinerary(data: createItinerarySchemaType) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session || !session.user?.id) {
    throw new Error('User not authenticated');
  }
  try {
    const existing = await prisma.itinerary.findFirst({
      where: {
        title: data.title,
        userId: session.user.id,
      },
    });
    if (existing) {
      throw new Error('Itinerary with this title already exists for this user');
    }
    const itinerary = await prisma.itinerary.create({
      data: {
        title: data.title,
        description: data.description,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        userId: session.user.id,
      },
    });
    return itinerary;
  } catch (error) {
    if (error instanceof Error && error.message.includes('already exists')) {
      throw error;
    }
    throw new Error(`Failed to create itinerary: ${error}`);
  }
}

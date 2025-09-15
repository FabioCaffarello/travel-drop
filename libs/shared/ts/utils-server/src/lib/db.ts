import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let prismaInstance: PrismaClient;

try {
  prismaInstance = globalForPrisma.prisma || new PrismaClient();
} catch (error) {
  // Fallback for build time when Prisma engines aren't available
  console.warn('Prisma client initialization failed, using mock for build time:', error);
  prismaInstance = {
    $connect: () => Promise.resolve(),
    $disconnect: () => Promise.resolve(),
    user: {} as any,
    session: {} as any,
    account: {} as any,
    verification: {} as any,
  } as PrismaClient;
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

import 'dotenv/config';
import * as bcrypt from 'bcryptjs';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not configured');
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main(): Promise<void> {
  const passwordHash = await bcrypt.hash(
    'Admin123!',
    12,
  );

  await prisma.user.upsert({
    where: {
      username: 'admin',
    },
    update: {
      email: 'admin@example.com',
      passwordHash,
      deletedAt: null,
      deletedBy: null,
    },
    create: {
      username: 'admin',
      email: 'admin@example.com',
      passwordHash,
    },
  });

  console.log('Admin user seeded successfully.');
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
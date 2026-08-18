import { prisma } from './src/lib/prisma';
async function run() {
  const events = await prisma.events.findMany({ take: 1 });
  console.log("Prisma working!", events);
  process.exit(0);
}
run().catch(console.error);

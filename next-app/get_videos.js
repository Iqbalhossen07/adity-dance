const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const videos = await prisma.videos.findMany();
  console.log(videos.map(v => ({ id: v.id.toString(), title: v.title, youtube_url: v.youtube_url })));
}
main();


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 32,
    },
  });
  console.log(result);
}

main().catch((err) => {
  console.error(err);
});
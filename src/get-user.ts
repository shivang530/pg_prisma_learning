import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    where: {
      email: {
        contains: "shivang",
      },
    },
  });
  console.log(users);
  //[ { id: 1, email: 'shivang123@abc.com', name: 'shivang' } ]
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
  console.log(user);
  {
    /*
        {
  id: 1,
  email: 'shivang123@abc.com',
  name: 'shivang',
  posts: [
    {
      id: 1,
      createdAt: 2025-03-13T14:58:08.834Z,
      updatedAt: 2025-03-13T14:58:08.834Z,
      title: 'title of post',
      content: 'content of post',
      published: false,
      authorId: 1
    },
    {
      id: 2,
      createdAt: 2025-03-13T14:59:36.507Z,
      updatedAt: 2025-03-13T14:59:36.507Z,
      title: 'title of post',
      content: 'content of post',
      published: true,
      authorId: 1
    }
  ]
}
        */
  }
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

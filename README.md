# pg_prisma_learning
## Introduction

This repository contains learning materials and examples for using Prisma with PostgreSQL. Prisma is an open-source database toolkit that makes it easy to work with databases in Node.js and TypeScript.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/pg_prisma_learning.git
    ```
2. Navigate to the project directory:
    ```sh
    cd pg_prisma_learning
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Setting Up Prisma

1. Initialize Prisma in your project:
    ```sh
    npx prisma init
    ```
2. Configure the database connection in the `.env` file:
    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
3. Define your data model in `prisma/schema.prisma`:
    ```prisma
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    generator client {
      provider = "prisma-client-js"
    }

    model User {
      id    Int     @id @default(autoincrement())
      name  String
      email String  @unique
    }
    ```

4. Run the Prisma migrate command to create the database tables:
    ```sh
    npx prisma migrate dev --name init
    ```

## Using Prisma Client

1. Generate the Prisma Client:
    ```sh
    npx prisma generate
    ```
2. Use the Prisma Client in your application code:
    ```js
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    async function main() {
      const newUser = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@example.com',
        },
      });
      console.log(newUser);
    }

    main()
      .catch(e => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
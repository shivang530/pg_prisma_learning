"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany({
            where: {
                email: {
                    contains: "shivang",
                },
            },
        });
        console.log(users);
        //[ { id: 1, email: 'shivang123@abc.com', name: 'shivang' } ]
        const user = yield prisma.user.findUnique({
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
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("done");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));

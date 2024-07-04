import { PrismaClient } from "@prisma/client";
import { get } from "http";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const result = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });

  console.log(result);
}

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const result = await prisma.user.update({
    where: { username },
    data: { firstName, lastName },
  });
  console.log(result);
}

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: { username },
  });
  console.log(user);
}

// insertUser("admin1", "123456", "Shroud", "Master");
// updateUser("admin1", { firstName: "Shashwat", lastName: "Dwivedi" });

getUser("admin1");

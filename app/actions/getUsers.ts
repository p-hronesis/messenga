import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

export default async function getUsers() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const users = await prisma.user.findMany({
      where: {
        NOT: { email: session.user.email },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!users) {
      return null;
    }

    return users;
  } catch (error: any) {
    console.log(error);
    return [];
  }
}

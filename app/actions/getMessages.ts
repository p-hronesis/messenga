import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";

const getMessages = async (conversationId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return [];
    }
    const messages = await prisma.message.findMany({
      where: {
        conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};

export default getMessages;

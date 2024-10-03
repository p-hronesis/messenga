import { Conversation, Message, User } from "@prisma/client";

export interface FullConversationType extends Conversation {
  users: User[];
  messages: (Message & { seen: User[] })[];
}

export interface FullMessagType extends Message {
  seen: User[];
  sender: User;
}

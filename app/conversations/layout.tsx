import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversions";
import getUsers from "../actions/getUsers";

const ConversationsLayout = async ({ children }: { children: React.ReactNode }) => {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    // @jts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users!} initialItems={conversations!} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;

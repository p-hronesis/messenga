import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import { HiChat } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { useMemo } from "react";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => {
          console.log("calling the sign out function");
          signOut();
        },
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [conversationId, pathname]
  );
  return routes;
};

export default useRoutes;

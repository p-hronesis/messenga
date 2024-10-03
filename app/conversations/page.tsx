"use client";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";
import clsx from "clsx";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={
        (clsx("hidden lg:pl-80 h-full lg:block"),
        isOpen ? "hidden lg:pl-80 h-full lg:block" : "hidden")
      }>
      <EmptyState />
    </div>
  );
};

export default Home;

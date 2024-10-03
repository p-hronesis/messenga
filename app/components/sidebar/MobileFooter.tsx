"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoute";
import React, { useState } from "react";
import MobileItem from "./MobileItem";
import { User } from "@prisma/client";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";

interface DMobileFooterProps {
  currentUser: User;
}

const MobileFooter: React.FC<DMobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [isOpen_, setIsOpen_] = useState(false);

  if (isOpen) {
    return null;
  }
  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen_}
        onClose={() => {
          // console.log("Attempting to close the modal");
          setIsOpen_(false);
        }}
      />

      <div
        className={`
            fixed
            justify-between
            w-full
            bottom-0
            z-40
            flex
            items-center
            bg-white
            border-t-[1px]
            lg:hidden
            ${currentUser?.email}
    `}>
        <div
          onClick={() => setIsOpen_(true)}
          className="
          cursor-pointer
          hover:opacity-75
          transition
          group
          flex
          flex-col
          items-center
          gap-x-3
          text-sm
          leading-6
          font-semibold
          w-full
          justify-center
          p-4
          text-gray-500
          hover:text-black
          hover:bg-gray-100
        ">
          <Avatar user={currentUser} />
          <span className="">settings</span>
        </div>
        {routes.map((route) => (
          <MobileItem
            key={route.label}
            href={route.href}
            label={route.label}
            icon={route.icon}
            active={route.active}
            onClick={route.onClick}
          />
        ))}
      </div>
    </>
  );
};

export default MobileFooter;

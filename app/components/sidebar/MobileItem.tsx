"use client";
import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

interface MobileItemProps {
  href: string;
  label: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `
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
      `,
        active && "bg-gray-100 text-black"
      )}>
      <Icon className="h-6 w-6" />
      <span className="">{label}</span>
    </Link>
  );
};

export default MobileItem;

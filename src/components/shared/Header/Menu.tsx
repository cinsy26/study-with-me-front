import react from "react";

interface MenuProps {
  text?: string;
  onClick?: () => void;
}

export default function Menu({ text = "Menu", onClick }: MenuProps) {
  return (
    <div
      onClick={onClick}
      className="
        gap-[10px]
        w-[15%]
        h-[60px]
        border border-gray-300
        flex
        items-center
        justify-center
        cursor-pointer
        hover:bg-gray-50
        transition-colors
      ">
      {text}
    </div>
  );
}

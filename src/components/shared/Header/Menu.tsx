// Menu.tsx
import React from "react";

interface MenuProps {
  text: string;
  onClick?: () => void;
}

export default function Menu({ text, onClick }: MenuProps) {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group">
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
    </button>
  );
}

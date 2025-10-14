import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center gap-2 cursor-pointer group">
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
        Study Mate
      </span>
    </div>
  );
}

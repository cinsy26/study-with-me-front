import React from "react";
import Menu from "./Menu.tsx";
import Logo from "./Logo.tsx";
import Mypage from "./Mypage.tsx";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div
      className="
      flex
            border border-gray-300
            justify-between
            w-[100%]
            h-[60px]
            border border-gray-300


            ">
      <Logo />
      <Menu text="홈" onClick={() => navigate("/")} />
      <Menu text="내스터디" onClick={() => navigate("/study/mystudy")} />
      <Menu text="마이페이지" />
      <Mypage />
    </div>
  );
}

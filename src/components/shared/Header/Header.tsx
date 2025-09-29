import React from "react";
import Menu from "./Menu.tsx";
import Logo from "./Logo.tsx";
import Mypage from "./Mypage.tsx";

export default function Header() {
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
      <Menu text="홈" />
      <Menu text="내스터디" />
      <Menu text="마이페이지" />
      <Mypage />
    </div>
  );
}

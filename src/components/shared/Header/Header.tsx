/*
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

*/

// Header.tsx
import React from "react";
import Menu from "./Menu.tsx";
import Logo from "./Logo.tsx";
import Mypage from "./Mypage.tsx";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="flex items-center gap-32">
            <Menu text="홈" onClick={() => navigate("/")} />
            <Menu text="내 스터디" onClick={() => navigate("/study/mystudy")} />
            <Menu text="마이페이지" onClick={() => navigate("/mypage")} />
          </nav>

          <Mypage />
        </div>
      </div>
    </header>
  );
}

import React from "react";
import StudyBox from "../components/home/StudyBox.tsx";
import PointBox from "../components/home/PointBox.tsx";
import StudyList from "../components/home/StudyList.tsx";
import kakaoLoginImage from "../assets/login/kakao_login_medium_wide.png";

export default function Login() {
  return (
    <div
      className="
        border border-gray-300
        w-[400px]
        h-[500px]
        flex
        flex-col
        gap-[20px]
        mx-auto
        mt-[calc(50vh-250px)]

        items-center
        justify-center
        ">
      <div
        className="
        text-[32px]
        font-bold
        ">
        Study Mate
      </div>
      카카오 로그인으로 Study Mate 시작하기
      <img src={kakaoLoginImage} alt="kakao login" />
    </div>
  );
}

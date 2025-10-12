import React from "react";
import SearchStudy from "./SearchStudy.tsx";
import RectangleButton from "../button/Rectangle-Button.tsx";
import { useNavigate } from "react-router-dom";

export default function StudyBox() {
  const navigate = useNavigate();

  return (
    <div
      className="
            border border-gray-300
            gap-[20px]
            flex flex-col items-center
            w-[70%]
            ">
      <SearchStudy></SearchStudy>
      <RectangleButton
        color="#D9D9D9"
        width="400px"
        fontSize="16px"
        onClick={() => navigate("/study/create")}>
        새로운 스터디 만들기
      </RectangleButton>
    </div>
  );
}

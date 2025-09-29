import React from "react";
import RectangleButton from "../button/Rectangle-Button.tsx";
import StudyComponent from "../shared/StudyComponenet.tsx/Study.tsx";

export default function StudyList() {
  return (
    <div
      className="
            flex
            flex-col
            gap-[10px]
            border border-gray-300
            w-[100%]
            h-[100%]
            text-[28px]
            text-left
            ">
      <div className="ml-[10px]">내가 참여한 스터디</div>
      <StudyComponent></StudyComponent>
      <StudyComponent></StudyComponent>
    </div>
  );
}

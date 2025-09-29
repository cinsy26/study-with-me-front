import React from "react";
import RectangleButton from "../../button/Rectangle-Button.tsx";
import StudyTop from "./StudyTop.tsx";
import StudyInfo from "./StudyInfo.tsx";

export default function StudyComponent() {
  return (
    <div
      className="
            flex
            flex-col
            border border-gray-300
            w-[100%]
            h-fit-content
            text-[20px]
            border border-gray-300
            gap-[10px]
            rounded-[10px]
            p-[15px]
            ">
      <StudyTop
        studyTitle="알고리즘 스터디"
        status="모집중"
        period="2024.01.01 ~ 2024.12.31"
      />
      <div className="flex flex-row gap-[10px]">
        <StudyInfo title="인원" content="4/6명" />
        <StudyInfo title="미션" content="매일 코테 문제 1개 이상 풀기" />
      </div>
      <div className="flex flex-row gap-[10px]">
        <StudyInfo title="보증금" content="10000원" />
        <StudyInfo title="벌금" content="1000원" />
      </div>
    </div>
  );
}

import React from "react";
import StudyBox from "../components/home/StudyBox.tsx";
import PointBox from "../components/home/PointBox.tsx";
import StudyList from "../components/home/StudyList.tsx";

export default function Home() {
  return (
    <div
      className="
      h-[100vh]
    flex
    flex-col
    gap-[20px]
     mt-[20px] ">
      <div
        className="
            flex
            border border-gray-300
            gap-[20px]
            ">
        <StudyBox />
        <PointBox />
      </div>

      <StudyList />
    </div>
  );
}

import React from "react";
import StudyBox from "../components/home/StudyBox.tsx"; 
import PointBox from "../components/home/PointBox.tsx";

export default function Home() {
    return (
        <div
         className="
            flex
            border border-gray-300
            gap-[20px]
            ">
            <StudyBox />
            <PointBox />
        </div>
    );
}
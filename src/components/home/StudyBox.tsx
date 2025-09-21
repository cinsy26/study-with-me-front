import React from "react";
import SearchStudy from "./SearchStudy.tsx";
import RectangleButton from "../button/Rectangle-Button.tsx";

export default function StudyBox(){
    return(
        <div
            className="
            border border-gray-300
            gap-[20px]
            flex flex-col items-center

            "
        >
           <SearchStudy></SearchStudy>
           <RectangleButton
                color="#D9D9D9"
                width="400px"
                onClick={() => alert("검색 버튼 클릭, 나중에 검색하는 걸로 교체")}>새로운 스터디 만들기</RectangleButton>
        </div>
    )
}
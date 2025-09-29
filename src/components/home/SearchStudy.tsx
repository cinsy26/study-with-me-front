import React from "react";
import SearchInput from "../input/Search-Input.tsx";
import RectangleButton from "../button/Rectangle-Button.tsx";
import StudyTag from "../tag/StudyTag.tsx";

export default function SearchStudy() {
  return (
    <div
      className="
            border border-gray-300
            gap-[10px]
            w-[100%] //550px
            flex flex-col

            ">
      <div
        className="
                flex
                gap-[20px]
                
                ">
        <SearchInput
          placeholder="검색을 통해 스터디를 찾아보세요"
          width="70%"
          fontSize="16px"></SearchInput>
        {/* 420px */}
        <RectangleButton
          color="#D9D9D9"
          width="30%" //120px
          fontSize="16px"
          onClick={() => alert("검색 버튼 클릭, 나중에 검색하는 걸로 교체")}>
          검색
        </RectangleButton>
      </div>
      <div
        className="
                flex
                gap-[15px]
                ">
        <StudyTag text="알고리즘" />
        <StudyTag text="토익" />
        <StudyTag text="면접 준비" />
        <StudyTag text="정보처리기사 실기" />
        <StudyTag text="리눅스마스터 2급" />
        <StudyTag text="오픽" />
        <StudyTag text="jlpt N3" />
      </div>
    </div>
  );
}

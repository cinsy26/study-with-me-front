import React from "react";
import RectangleButton from "../button/Rectangle-Button.tsx";

//부모(Home)로부터 point를 props로 받기
interface PointBoxProps {
  point: number;
}

export default function PointBox({ point }: PointBoxProps) {
  return (
    <div
      className="
            flex
            flex-col
            justify-center
            items-center
            border border-gray-300
            gap-[10px]
            w-[30%] //250px
            px-[10px]
            py-[10px]

            ">
      <div
        className="
            text-[22px]">
        나의 포인트
      </div>
      <div
        className="
            border border-gray-300
            w-[100%]
            h-[40px]
            text-[20px]
            ">
        {point.toLocaleString()}
      </div>
      <div
        className="
            flex
            gap-[10px]
            w-full //헐 이거 유무가 되게 크다..
            ">
        <RectangleButton
          color="#D9D9D9"
          width="50%"
          fontSize="12px"
          onClick={() => alert("검색 버튼 클릭, 나중에 검색하는 걸로 교체")}>
          사용 내역
        </RectangleButton>
        <RectangleButton
          color="#D9D9D9"
          width="50%"
          fontSize="12px"
          onClick={() => alert("검색 버튼 클릭, 나중에 검색하는 걸로 교체")}>
          포인트 충전
        </RectangleButton>
      </div>
    </div>
  );
}

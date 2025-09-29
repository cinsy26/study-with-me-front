import React from "react";

type SearchInputProps = {
  placeholder?: string; //placeholder를 외부에서 받기
  width?: string; // 예: "300px", "100%"
  height?: string; // 예: "50px", "3rem"
  fontSize?: string; // 예: "16px", "1rem"
};
export default function SearchInput({
  placeholder = "검색어를 입력하세요",
  width = "fit-content",
  height = "fit-content",
  fontSize = "14px",
}: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{ width, height, fontSize }}
      className="flex
        py-[10px]
        px-[20px] 
        items-center 
        gap-[10px] 
        border border-gray-300 
        rounded-[5px]
        text-[14px]
"
    />
  );
}

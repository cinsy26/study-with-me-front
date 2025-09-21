import React from "react";

type SearchInputProps = {
    placeholder?: string; //placeholder를 외부에서 받기
    width?: string;       // 예: "300px", "100%"
    height?: string;      // 예: "50px", "3rem"
}
export default function SearchInput({
    placeholder = "검색어를 입력하세요",
    width = "fit-content",
    height = "fit-content",
}: SearchInputProps){
    return(
        <input
        type="text"
        placeholder={placeholder}
        style={{width, height}}
        className="flex
        py-[7px]
        px-[20px] 
        items-center 
        gap-[10px] 
        border border-gray-300 
        rounded-[5px]
        text-[12px]
"
/>

    )
}
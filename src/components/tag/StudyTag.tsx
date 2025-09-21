import React from "react";

type StudyTagProps={
    text: string;
    height?: string;
    width?: string;
}

export default function StudyTag({
    text, 
    height ="fit-content",
    width = "fit-content"}: StudyTagProps){
    return(
        <div
            style={{height}}
            className="
                flex
                justify-center
                items-center
                gap-[10px]
                px-[10px]
                py-[3px]
                rounded-[30px]
                bg-[#D9D9D9]
                text-black
                text-[10px]"
        >
            {text}
        </div>
    )

}
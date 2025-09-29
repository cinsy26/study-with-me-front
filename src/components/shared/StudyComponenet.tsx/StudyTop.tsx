import React from "react";
import RectangleButton from "../../button/Rectangle-Button.tsx";

export default function StudyTop({
  studyTitle,
  status,
  period,
}: {
  studyTitle: string;
  status: string;
  period: string;
}) {
  return (
    <div
      className="
            flex
            flex-col
            border border-gray-300
            w-[100%]
            h-fit-content
            gap-[5spx]
            ">
      <div
        className="
        flex
        items-center
        justify-between
        ">
        <div
          className="
                    text-[24px]
                    font-bold
                    ">
          {studyTitle}
        </div>
        <div
          className="
                        flex
                        justify-center
                        items-center
                        px-[15px]
                        py-[5px]
                        rounded-[30px]
                        bg-[#D9D9D9]
                        text-black
                        text-[12px]">
          {status}
        </div>
      </div>
      <div
        className="
              text-[14px]
              text-gray-500
              self-start
              ">
        {period}
      </div>
    </div>
  );
}

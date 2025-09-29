import React from "react";
import RectangleButton from "../../button/Rectangle-Button.tsx";

interface StudyInfoProps {
  title: string;
  content: string;
}

export default function StudyInfo({ title, content }: StudyInfoProps) {
  return (
    <div
      className="
            border border-gray-300
            w-[50%]
            
            text-left
      ">
      {title}: {content}
    </div>
  );
}

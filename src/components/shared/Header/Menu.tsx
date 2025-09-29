import react from "react";

export default function Menu({ text = "Menu" }: { text?: string }) {
  return (
    <div
      className="
              gap-[10px]
              w-[15%]
              h-[60px]
              border border-gray-300
              flex
              items-center
              justify-center

              ">
      {text}
    </div>
  );
}

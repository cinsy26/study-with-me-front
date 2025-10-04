import React from "react";
import { MessageCircle } from "lucide-react"; // 말풍선 아이콘 (lucide-react 사용)

type KakaoLoginButtonProps = {
  onClick?: () => void;
};

export default function KakaoLoginButton({ onClick }: KakaoLoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        items-center
        justify-center
        gap-2
        bg-[#FEE500]          // 카카오 노란색
        text-black
        font-medium
        rounded-md
        px-6
        py-2.5
        hover:brightness-95
        active:scale-95
        transition-all
        duration-150
        shadow-sm
      ">
      <MessageCircle size={18} className="text-black" />
      <span>카카오 로그인</span>
    </button>
  );
}

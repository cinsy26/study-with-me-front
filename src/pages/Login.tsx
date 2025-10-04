import React from "react";
import KakaoLoginButton from "../components/button/KakaoLogin-Button.tsx";

export default function Login() {
  const REST_API_KEY = "4546d6807fe06adecde8329fd77f7a3a"; // Kakao Developers REST API 키
  const REDIRECT_URI = "http://localhost:8080/login/oauth2/code/kakao"; // 백엔드 redirect URI
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div
      className="
        border border-gray-300
        w-[400px]
        h-[500px]
        flex
        flex-col
        gap-[20px]
        mx-auto
        mt-[calc(50vh-250px)]
        items-center
        justify-center
      ">
      <div
        className="
          text-[32px]
          font-bold
        ">
        Study Mate
      </div>
      <div>카카오 로그인으로 Study Mate 시작하기</div>
      <KakaoLoginButton
        onClick={() => (window.location.href = KAKAO_AUTH_URL)}
      />
    </div>
  );
}

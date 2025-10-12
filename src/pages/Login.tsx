import React from "react";
import KakaoLoginButton from "../components/button/KakaoLogin-Button.tsx";

export default function Login() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = "http://localhost:8080/oauth2/authorization/kakao";

  //const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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

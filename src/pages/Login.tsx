/*
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
*/

import React from "react";

export default function Login() {
  const KAKAO_AUTH_URL = "http://localhost:8080/oauth2/authorization/kakao";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* 로고 영역 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-3">
              Study Mate
            </h1>
            <p className="text-gray-600 text-lg">함께 성장하는 스터디 플랫폼</p>
          </div>

          {/* 안내 문구 */}
          <div className="text-center mb-6">
            <p className="text-gray-700 font-medium">
              카카오 로그인으로 간편하게 시작하세요
            </p>
          </div>

          {/* 카카오 로그인 버튼 */}
          <button
            onClick={() => (window.location.href = KAKAO_AUTH_URL)}
            className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-[#000000] font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.8 6.7-.2.7-.6 2.1-.7 2.5 0 .3.1.5.3.6.2.1.4.1.6 0 .4-.2 2.6-1.7 3.5-2.3.5.1 1 .1 1.5.1 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
            </svg>
            <span>카카오 로그인</span>
          </button>
        </div>

        {/* 추가 정보 */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            스터디 메이트와 함께 목표를 달성해보세요
          </p>
        </div>
      </div>
    </div>
  );
}

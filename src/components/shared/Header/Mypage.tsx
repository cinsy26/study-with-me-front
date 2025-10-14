/*import react from "react";

export default function Logo() {
  return (
    <div
      className="
            border border-gray-300
            gap-[10px]
            w-[20%]
            h-[60px]
            flex
            items-center
            justify-center
              ">
      mypage
    </div>
  );
}
*/

// Mypage.tsx
import React, { useState, useEffect } from "react";
import { getMyHomeInfo } from "../../../api/home/homeApi.ts";

interface UserInfo {
  nickname: string;
  email?: string;
}

export default function Mypage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    try {
      const data = await getMyHomeInfo();
      setUserInfo(data);
    } catch (error) {
      console.error("사용자 정보 조회 실패:", error);
      setUserInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>;
  }

  if (!userInfo) {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
        로그인
      </button>
    );
  }

  return (
    <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
      <span className="text-gray-900 font-medium">{userInfo.nickname}님</span>
    </div>
  );
}

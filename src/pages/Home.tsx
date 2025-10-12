import React, { useState, useEffect } from "react";
import StudyBox from "../components/home/StudyBox.tsx";
import PointBox from "../components/home/PointBox.tsx";
import StudyList from "../components/home/StudyList.tsx";
import { getMyHomeInfo } from "../api/home/homeApi.ts";

export default function Home() {
  const [homeInfo, setHomeInfo] = useState<any>(null);

  useEffect(() => {
    const fetchHomeInfo = async () => {
      try {
        const data = await getMyHomeInfo(); // 임시 userId
        setHomeInfo(data);
      } catch (error) {
        console.error("홈 정보 로드 실패:", error);
      }
    };
    fetchHomeInfo();
  }, []);

  if (!homeInfo) return <div>로딩 중...</div>;

  return (
    <div
      className="
      h-[100vh]
    flex
    flex-col
    gap-[20px]
     mt-[20px] ">
      <div
        className="
            flex
            border border-gray-300
            gap-[20px]
            ">
        <StudyBox />
        <PointBox point={homeInfo.point} />
      </div>
      <div>안녕하세요!{homeInfo.nickname} 님! </div>
      <StudyList />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyHomeInfo } from "../api/home/homeApi.ts";
import { FetchMyStudies } from "../api/study/FetchMyStudies.ts";
import { fetchLatestStudiesApi } from "../api/home/FetchLatestStudiesApi.ts";
import OngoingStudyCard from "../components/home/OngoingStudyCard.tsx";
import LatestStudyCard from "../components/home/LatestStudyCard.tsx";
import { FetchStudyDetail } from "../api/study/FetchStudyDetail.ts"; // 추가

interface HomeInfo {
  isLoggedIn: boolean;
  nickname?: string;
  point?: number;
}

interface MyStudy {
  id: number;
  title: string;
  description: string;
  status: string;
  memberLimit: number;
  currentMemberCount: number;
  startDate: string;
  endDate: string;
  role: "LEADER" | "MEMBER";
}

interface LatestStudy {
  id: number;
  title: string;
  description: string;
  status: string;
  memberLimit: number;
  currentMemberCount: number;
  startDate: string;
  endDate: string;
  createdAt: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [homeInfo, setHomeInfo] = useState<HomeInfo | null>(null);
  const [myStudies, setMyStudies] = useState<MyStudy[]>([]);
  const [latestStudies, setLatestStudies] = useState<LatestStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const recommendedTags = [
    "알고리즘",
    "토익",
    "면접 준비",
    "정보처리기사",
    "리눅스마스터",
    "오픽",
    "JLPT",
  ];

  useEffect(() => {
    fetchAllInfo();
  }, []);

  const fetchAllInfo = async () => {
    try {
      // ✅ 최신 스터디는 항상 불러오기
      const latestData = await fetchLatestStudiesApi();
      setLatestStudies(latestData || []);

      try {
        // ✅ 로그인 되어 있을 때만 homeInfo & myStudies 호출
        const [homeData, studyData] = await Promise.all([
          getMyHomeInfo(),
          FetchMyStudies(),
        ]);

        setHomeInfo({
          isLoggedIn: true,
          nickname: homeData.nickname,
          point: homeData.point || 0,
        });
        setMyStudies(studyData || []);
      } catch (authError) {
        // ✅ 로그인 안 된 경우에도 최신 스터디는 유지
        console.warn("로그인 안 됨:", authError);
        setHomeInfo({ isLoggedIn: false });
        setMyStudies([]);
      }
    } catch (error) {
      console.error("홈 정보 조회 오류:", error);
      setHomeInfo({ isLoggedIn: false });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStudyClick = async (studyId: number) => {
    try {
      const detail = await FetchStudyDetail(studyId); // 미리 불러오기
      navigate(`/study/studyinfo/${studyId}`, {
        state: { studyDetail: detail },
      });
    } catch (error) {
      console.error("스터디 상세 조회 실패:", error);
      alert("스터디 정보를 불러올 수 없습니다.");
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/studies/search?keyword=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/studies/search?keyword=${encodeURIComponent(tag)}`);
  };

  const handleCreateStudy = () => {
    navigate("/study/create");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">로딩 중...</p>
      </div>
    );
  }

  if (!homeInfo) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-[1600px] mx-auto px-8 py-10">
        {/* 상단 영역: 검색 + 포인트/로그인 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-8">
          {/* 검색 섹션 */}
          <div className="lg:col-span-3 bg-blue-500 rounded-2xl p-10 flex flex-col">
            <div className="flex gap-3 mb-5">
              <input
                type="text"
                placeholder="관심있는 스터디를 검색해보세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 px-5 py-4 rounded-xl border-none text-base outline-none"
              />
              <button
                onClick={handleSearch}
                className="px-8 py-4 bg-white text-blue-500 border-none rounded-xl text-base font-bold cursor-pointer">
                검색
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-auto">
              {recommendedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full text-sm cursor-pointer transition-all hover:bg-white/30">
                  {tag}
                </button>
              ))}
            </div>

            <button
              onClick={handleCreateStudy}
              className="w-full px-4 py-4 bg-white/15 border-2 border-dashed border-white/50 rounded-xl text-base text-white cursor-pointer font-medium transition-all mt-5 hover:bg-white/25">
              + 새 스터디 시작하기
            </button>
          </div>

          {/* 포인트 or 로그인 섹션 */}
          <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col justify-center">
            {homeInfo.isLoggedIn ? (
              <>
                <h3 className="text-base font-bold mb-3 text-gray-600">
                  나의 포인트
                </h3>
                <div className="text-4xl font-bold text-blue-500 mb-5">
                  {homeInfo.point?.toLocaleString() || 0}P
                </div>
                <button
                  onClick={() => navigate("/points/charge")}
                  className="w-full py-3 bg-blue-500 text-white border-none rounded-lg text-sm font-bold cursor-pointer mb-2">
                  포인트 충전
                </button>
                <button
                  onClick={() => navigate("/points/history")}
                  className="w-full py-3 bg-white text-blue-500 border-2 border-blue-500 rounded-lg text-sm font-bold cursor-pointer">
                  사용 내역
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold mb-3 text-gray-900 text-center">
                  스터디와 함께
                  <br />
                  성장하세요!
                </h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  지금 가입하고 다양한 스터디에 참여해보세요
                </p>
                <button
                  onClick={handleLogin}
                  className="w-full py-3 bg-blue-500 text-white border-none rounded-lg text-sm font-bold cursor-pointer mb-2">
                  로그인
                </button>
                <button
                  onClick={handleSignup}
                  className="w-full py-3 bg-white text-blue-500 border-2 border-blue-500 rounded-lg text-sm font-bold cursor-pointer">
                  회원가입
                </button>
              </>
            )}
          </div>
        </div>

        {/* 내가 참여한 스터디 */}
        {homeInfo.isLoggedIn && myStudies.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">📚 내가 참여한 스터디</h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 
            justify-center 
            w-full 
            max-w-[1200px] 
            mx-auto
          ">
              {" "}
              {myStudies.map((study) => (
                <OngoingStudyCard
                  key={study.id}
                  id={study.id}
                  title={study.title}
                  description={study.description}
                  status={study.status}
                  memberLimit={study.memberLimit}
                  currentMemberCount={study.currentMemberCount}
                  startDate={study.startDate}
                  endDate={study.endDate}
                  role={study.role}
                  onClick={handleStudyClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* ✅ 최신 스터디 리스트 (컴포넌트 적용) */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">✨ 최신 스터디</h2>

          {latestStudies.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center text-gray-500">
              아직 등록된 스터디가 없습니다.
            </div>
          ) : (
            <div
              className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-8 
        justify-center 
        w-full 
        max-w-[1200px] 
        mx-auto
      ">
              {" "}
              {latestStudies.map((study) => (
                <LatestStudyCard
                  key={study.id}
                  id={study.id}
                  title={study.title}
                  description={study.description}
                  status={study.status}
                  memberLimit={study.memberLimit}
                  currentMemberCount={study.currentMemberCount}
                  startDate={study.startDate}
                  endDate={study.endDate}
                  onClick={handleStudyClick}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

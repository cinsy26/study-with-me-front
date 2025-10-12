import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudyCard from "../../components/study/StudyCard.tsx";
import { FetchMyStudies } from "../../api/study/FetchMyStudies.ts";

interface Study {
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

const MyStudies: React.FC = () => {
  const navigate = useNavigate();
  const [studies, setStudies] = useState<Study[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMyStudies();
  }, []);

  const loadMyStudies = async () => {
    try {
      const data = await FetchMyStudies();
      setStudies(data);
    } catch (error) {
      console.error("스터디 목록 조회 오류:", error);
      setStudies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateStudy = () => {
    navigate("/studies/create");
  };

  const handleSearchStudy = () => {
    navigate("/studies/search");
  };

  const handleStudyClick = (studyId: number) => {
    navigate(`/studies/${studyId}`);
  };

  // 로딩 중
  if (isLoading) {
    return (
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  // 빈 상태 - 참여 중인 스터디가 없을 때
  if (studies.length === 0) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            참여 중인 스터디가 없습니다.
          </h2>

          <p className="text-gray-600 mb-8">
            새로운 스터디를 검색하거나 직접 만들어보세요!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleSearchStudy}
              className="px-6 py-3 bg-white border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              스터디 검색
            </button>
            <button
              onClick={handleCreateStudy}
              className="px-6 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
              스터디 생성
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 스터디 목록이 있을 때
  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">내 스터디</h1>
          <button
            onClick={handleCreateStudy}
            className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
            + 스터디 생성
          </button>
        </div>

        <div className="space-y-4">
          {studies.map((study) => (
            <StudyCard
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
      </div>
    </div>
  );
};

export default MyStudies;

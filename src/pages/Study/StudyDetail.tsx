import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { joinStudy } from "../../api/study/JoinStudy.ts";

interface StudyMember {
  userId: number;
  nickname: string;
  role: "LEADER" | "MEMBER";
  status: "ACTIVE" | "INACTIVE";
}

interface StudyDetail {
  id: number;
  title: string;
  description: string;
  leaderNickname: string;
  members?: StudyMember[];
  missionDays?: string[];
  memberLimit?: number;
  currentMemberCount?: number;
  startDate?: string;
  endDate?: string;
  leader: boolean;
  participant: boolean;
}

export default function StudyDetail() {
  const navigate = useNavigate();

  const location = useLocation();
  const studyDetail = location.state?.studyDetail as StudyDetail | undefined;

  if (!studyDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        스터디 정보를 불러올 수 없습니다.
      </div>
    );
  }

  // ✅ 요일 정규화 함수
  const normalizeDay = (d: string | number) => {
    const s = String(d).toUpperCase();
    const map: Record<string, string> = {
      MON: "MONDAY",
      TUE: "TUESDAY",
      WED: "WEDNESDAY",
      THU: "THURSDAY",
      FRI: "FRIDAY",
      SAT: "SATURDAY",
      SUN: "SUNDAY",
      "1": "MONDAY",
      "2": "TUESDAY",
      "3": "WEDNESDAY",
      "4": "THURSDAY",
      "5": "FRIDAY",
      "6": "SATURDAY",
      "7": "SUNDAY",
    };
    const fulls = [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ];
    if (fulls.includes(s)) return s;
    return map[s] ?? s;
  };

  // ✅ 안전한 데이터 구성
  const safeDetail = {
    ...studyDetail,
    members: Array.isArray(studyDetail.members) ? studyDetail.members : [],
    missionDays: Array.isArray(studyDetail.missionDays)
      ? studyDetail.missionDays.map(normalizeDay)
      : [],
  };

  const {
    id,
    title,
    description,
    leaderNickname,
    members,
    missionDays,
    memberLimit,
    currentMemberCount,
    startDate,
    endDate,
    leader,
    participant,
  } = safeDetail;

  const weekdayMap: Record<string, string> = {
    MONDAY: "월요일",
    TUESDAY: "화요일",
    WEDNESDAY: "수요일",
    THURSDAY: "목요일",
    FRIDAY: "금요일",
    SATURDAY: "토요일",
    SUNDAY: "일요일",
  };

  const missionSet = new Set(missionDays);
  const allWeekdays = Object.keys(weekdayMap);

  const getRoleBadge = (role: string) => {
    const config: Record<string, { label: string; color: string }> = {
      LEADER: { label: "리더", color: "bg-purple-100 text-purple-700" },
      MEMBER: { label: "멤버", color: "bg-gray-200 text-gray-700" },
    };
    const { label, color } = config[role] || config.MEMBER;
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${color}`}>
        {label}
      </span>
    );
  };

  const handleJoinStudy = async () => {
    try {
      const result = await joinStudy(id); // API 호출
      alert(result); // "스터디에 참여하였습니다."
      navigate("/study/mystudy"); // ✅ 참여 성공 시 '내 스터디' 페이지로 이동
    } catch (error) {
      alert("스터디 참여 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* ✅ 스터디 기본 정보 */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-600 text-lg mb-6">{description}</p>

          {/* ✅ 기본 정보 */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4 py-4 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">스터디 시작일</p>
              <p className="font-bold text-gray-900">{startDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">스터디 종료일</p>
              <p className="font-bold text-gray-900">{endDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">현재 멤버수</p>
              <p className="font-bold text-gray-900">
                {currentMemberCount ?? members.length ?? 0}명
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">최대 멤버수</p>
              <p className="font-bold text-gray-900">{memberLimit}명</p>
            </div>
          </div>

          {/* ✅ 내 역할 (참여자만) */}
          {participant && (
            <div className="mt-4 border-t pt-4">
              <p className="text-sm text-gray-500 mb-1">내 역할</p>
              <p className="font-bold text-gray-900">
                {leader ? "리더" : "멤버"}
              </p>
            </div>
          )}

          {/* ✅ 미션 요일 */}
          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-gray-500 mb-2">미션 요일</p>
            <div className="flex flex-wrap gap-2">
              {allWeekdays.map((day) => (
                <span
                  key={day}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    missionSet.has(day)
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-400"
                  }`}>
                  {weekdayMap[day]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ 참여자 전용 멤버 목록 */}
        {participant && members && members.length > 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              스터디 멤버 목록
            </h2>
            <div className="space-y-3">
              {members.map((member) => (
                <div
                  key={member.userId}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {member.nickname[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {member.nickname}
                      </p>
                      <p className="text-sm text-gray-500">
                        상태: {member.status}
                      </p>
                    </div>
                  </div>
                  {getRoleBadge(member.role)}
                </div>
              ))}
            </div>

            {leader && (
              <div className="mt-6 text-right">
                <button
                  onClick={() =>
                    alert("스터디 관리 기능 (예: 멤버 강퇴, 수정 등)")
                  }
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors">
                  리더 관리 메뉴
                </button>
              </div>
            )}
          </div>
        ) : (
          // ❌ 비참여자 전용
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              이 스터디에 참여하시겠습니까?
            </h3>
            <p className="text-gray-600 mb-6">
              스터디 리더 <strong>{leaderNickname}</strong>님이 운영 중입니다.
            </p>
            <button
              onClick={handleJoinStudy} // ✅ 연결된 클릭 핸들러
              className="px-8 py-4 bg-blue-500 text-white rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors">
              스터디 참여하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { FetchMyStudies } from "../api/study/FetchMyStudies.ts";
import { getMyHomeInfo } from "../api/home/homeApi.ts";

type TabType = "current" | "past" | "charge" | "history" | "profile";

interface Study {
  id: number;
  title: string;
  description?: string;
  status: string;
  startDate?: string;
  endDate?: string;
  memberLimit?: number;
  currentMemberCount?: number;
}

interface UserInfo {
  nickname: string;
  email: string;
  point: number;
}

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<TabType>("current");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [currentStudies, setCurrentStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [chargeAmount, setChargeAmount] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userRes, studiesRes] = await Promise.all([
          getMyHomeInfo(),
          FetchMyStudies(),
        ]);

        setUserInfo({
          nickname: userRes.nickname,
          email: userRes.email || "이메일 정보 없음",
          point: userRes.point ?? 0,
        });
        setNickname(userRes.nickname);
        setEmail(userRes.email || "");
        setCurrentStudies(studiesRes);
      } catch (err) {
        console.error(err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCharge = () => {
    if (!chargeAmount || Number(chargeAmount) <= 0) {
      alert("충전할 금액을 입력해주세요.");
      return;
    }
    alert(`${Number(chargeAmount).toLocaleString()}P 충전 요청`);
    setChargeAmount("");
  };

  const handleSaveProfile = () => {
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    alert("개인정보가 수정되었습니다!");
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }
    if (newPassword.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    alert("비밀번호가 변경되었습니다!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // ✅ 이모티콘 제거된 탭 목록
  const tabs = [
    { id: "current" as TabType, label: "참여중인 스터디" },
    { id: "past" as TabType, label: "이전 스터디" },
    { id: "charge" as TabType, label: "포인트 충전" },
    { id: "history" as TabType, label: "포인트 내역" },
    { id: "profile" as TabType, label: "계정관리" },
  ];

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        데이터를 불러오는 중입니다...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  if (!userInfo)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        사용자 정보를 불러올 수 없습니다.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 사용자 정보 카드 */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{userInfo.nickname}님</h1>
              <p className="text-blue-100">{userInfo.email}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-sm mb-1">보유 포인트</p>
              <p className="text-4xl font-bold">
                {userInfo.point.toLocaleString()}P
              </p>
            </div>
          </div>
        </div>

        {/* 탭 버튼 */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-2">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-50"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 참여중인 스터디 */}
        {activeTab === "current" && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              참여중인 스터디
            </h2>
            {currentStudies.length > 0 ? (
              <div className="space-y-4">
                {currentStudies.map((study) => (
                  <div
                    key={study.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {study.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                        {study.status}
                      </span>
                    </div>
                    <div className="flex gap-6 text-gray-600">
                      <span>
                        👥 {study.currentMemberCount ?? 0} /{" "}
                        {study.memberLimit ?? "-"}명
                      </span>
                      <span>
                        📅 {study.startDate} ~ {study.endDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">참여중인 스터디가 없습니다.</p>
            )}
          </div>
        )}

        {/* 포인트 충전 */}
        {activeTab === "charge" && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              포인트 충전
            </h2>
            <div className="max-w-md mx-auto">
              <input
                type="number"
                value={chargeAmount}
                onChange={(e) => setChargeAmount(e.target.value)}
                placeholder="충전할 금액을 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
              />
              <button
                onClick={handleCharge}
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
                충전하기
              </button>
            </div>
          </div>
        )}

        {/* 프로필 관리 */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              개인정보 변경
            </h2>
            <div className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">닉네임</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">이메일</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                onClick={handleSaveProfile}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                프로필 저장
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

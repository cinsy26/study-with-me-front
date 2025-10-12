import React, { useState } from "react";
import { createStudy } from "../../api/study/CreateStudyApi.ts";
import { Weekday, StudyCreateRequest } from "../../api/study/CreateStudyApi.ts";
import { useNavigate } from "react-router-dom";

const WEEKDAYS: { value: Weekday; label: string }[] = [
  { value: "MON", label: "월" },
  { value: "TUE", label: "화" },
  { value: "WED", label: "수" },
  { value: "THU", label: "목" },
  { value: "FRI", label: "금" },
  { value: "SAT", label: "토" },
  { value: "SUN", label: "일" },
];

const CreateStudy: React.FC = () => {
  const [formData, setFormData] = useState<StudyCreateRequest>({
    title: "",
    description: "",
    memberLimit: 4,
    startDate: "",
    endDate: "",
    missionDescription: "",
    depositAmount: 10000,
    penaltyAmount: 1000,
    missionDays: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name.includes("Amount") || name === "memberLimit"
          ? Number(value)
          : value,
    }));
  };

  const handleWeekdayToggle = (weekday: Weekday) => {
    setFormData((prev) => ({
      ...prev,
      missionDays: prev.missionDays.includes(weekday)
        ? prev.missionDays.filter((d) => d !== weekday)
        : [...prev.missionDays, weekday],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await createStudy(formData);
      alert(`스터디가 생성되었습니다`);
      navigate("/");
    } catch (error) {
      console.error("스터디 생성 오류:", error);
      alert("스터디 생성에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">스터디 생성</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 스터디 제목 */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2">
              스터디 제목 *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="예: 알고리즘 스터디"
            />
          </div>

          {/* 스터디 설명 */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2">
              스터디 설명 *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="스터디에 대한 자세한 설명을 입력해주세요"
            />
          </div>

          {/* 모집 인원 */}
          <div>
            <label
              htmlFor="memberLimit"
              className="block text-sm font-medium text-gray-700 mb-2">
              모집 인원 *
            </label>
            <input
              type="number"
              id="memberLimit"
              name="memberLimit"
              required
              min="2"
              max="50"
              value={formData.memberLimit}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* 기간 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mb-2">
                시작일 *
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mb-2">
                종료일 *
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>

          {/* 미션 설명 */}
          <div>
            <label
              htmlFor="missionDescription"
              className="block text-sm font-medium text-gray-700 mb-2">
              미션 설명 *
            </label>
            <textarea
              id="missionDescription"
              name="missionDescription"
              required
              value={formData.missionDescription}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="예: 매일 알고리즘 문제 1개 풀고 인증하기"
            />
          </div>

          {/* 미션 요일 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              미션 요일 *
            </label>
            <div className="flex flex-wrap gap-2">
              {WEEKDAYS.map((day) => (
                <button
                  key={day.value}
                  type="button"
                  onClick={() => handleWeekdayToggle(day.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    formData.missionDays.includes(day.value)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}>
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          {/* 예치금/벌금 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="depositAmount"
                className="block text-sm font-medium text-gray-700 mb-2">
                예치금 (원) *
              </label>
              <input
                type="number"
                id="depositAmount"
                name="depositAmount"
                required
                min="0"
                step="1000"
                value={formData.depositAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="penaltyAmount"
                className="block text-sm font-medium text-gray-700 mb-2">
                미션 실패 시 벌금 (원) *
              </label>
              <input
                type="number"
                id="penaltyAmount"
                name="penaltyAmount"
                required
                min="0"
                step="1000"
                value={formData.penaltyAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              {isSubmitting ? "생성 중..." : "스터디 생성"}
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudy;

import React from "react";

interface StudyCardProps {
  id: number;
  title: string;
  description: string;
  status: string;
  memberLimit: number;
  currentMemberCount: number;
  startDate: string;
  endDate: string;
  role?: "LEADER" | "MEMBER";
  onClick?: (studyId: number) => void;
}

const StudyCard: React.FC<StudyCardProps> = ({
  id,
  title,
  description,
  status,
  memberLimit,
  currentMemberCount,
  startDate,
  endDate,
  role,
  onClick,
}) => {
  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; color: string }> = {
      RECRUITING: { label: "모집중", color: "bg-green-100 text-green-800" },
      IN_PROGRESS: { label: "진행중", color: "bg-blue-100 text-blue-800" },
      COMPLETED: { label: "완료", color: "bg-gray-100 text-gray-800" },
      CANCELLED: { label: "취소됨", color: "bg-red-100 text-red-800" },
    };

    const config = statusConfig[status] || statusConfig.RECRUITING;

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getRoleBadge = (role: string) => {
    return role === "LEADER" ? (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
        리더
      </span>
    ) : (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        멤버
      </span>
    );
  };

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            {role && getRoleBadge(role)}
            {getStatusBadge(status)}
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span>
            {currentMemberCount}/{memberLimit}명
          </span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>
            {startDate} ~ {endDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;

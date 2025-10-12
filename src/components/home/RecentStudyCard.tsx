import React from "react";

interface RecentStudyCardProps {
  id: number;
  title: string;
  members: number;
  maxMembers: number;
  daysLeft: number;
  onClick?: (studyId: number) => void;
}

const RecentStudyCard: React.FC<RecentStudyCardProps> = ({
  id,
  title,
  members,
  maxMembers,
  daysLeft,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const fillPercentage = Math.round((members / maxMembers) * 100);

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="px-2 py-1 rounded-md text-xs font-bold bg-yellow-100 text-yellow-700">
          {daysLeft}일 남음
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>
          👥 {members}/{maxMembers}명
        </span>
        <span>•</span>
        <span>{fillPercentage}% 달성</span>
      </div>
    </div>
  );
};

export default RecentStudyCard;

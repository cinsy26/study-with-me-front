import React from "react";

interface OngoingStudyCardProps {
  id: number;
  title: string;
  progress: number;
  status: string;
  onClick?: (studyId: number) => void;
}

const OngoingStudyCard: React.FC<OngoingStudyCardProps> = ({
  id,
  title,
  progress,
  status,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
          진행중
        </span>
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>진행률</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default OngoingStudyCard;

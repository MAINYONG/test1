
import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-indigo-700">진행률</span>
        <span className="text-sm font-medium text-indigo-700">{percentage}% 완료</span>
      </div>
      <div className="w-full bg-indigo-200 rounded-full h-4">
        <div 
          className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

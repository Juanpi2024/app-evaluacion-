
import React from 'react';
import { COURSE_DATA } from '../constants/courseData';
import { CheckIcon } from './IconComponents';

interface ProgressBarProps {
  totalModules: number;
  currentModuleIndex: number;
  unlockedModulesCount: number;
  setView: (view: 'module' | 'quiz') => void;
  setCurrentModuleIndex: (index: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalModules,
  currentModuleIndex,
  unlockedModulesCount,
  setView,
  setCurrentModuleIndex
}) => {
  
  const handleStepClick = (index: number) => {
    if (index < unlockedModulesCount) {
      setCurrentModuleIndex(index);
      setView('module');
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalModules }).map((_, index) => {
          const isCompleted = index < currentModuleIndex;
          const isCurrent = index === currentModuleIndex;
          const isUnlocked = index < unlockedModulesCount;

          let statusClass = "bg-slate-700 border-slate-600";
          if (isCompleted) statusClass = "bg-green-500 border-green-400";
          if (isCurrent) statusClass = "bg-yellow-500 border-yellow-400 scale-110";

          const ModuleIcon = COURSE_DATA[index].icon;

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleStepClick(index)}
                  disabled={!isUnlocked}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${statusClass} ${isUnlocked ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed'}`}
                >
                  {isCompleted ? <CheckIcon className="w-6 h-6 text-white" /> : <ModuleIcon className="w-6 h-6 text-white"/>}
                </button>
                <p className={`mt-2 text-xs text-center transition-colors ${isCurrent ? 'text-yellow-400 font-semibold' : 'text-slate-400'}`}>
                  Módulo {index + 1}
                </p>
              </div>

              {index < totalModules - 1 && (
                <div className={`flex-1 h-1 mx-2 rounded ${index < currentModuleIndex ? 'bg-green-500' : 'bg-slate-700'}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;

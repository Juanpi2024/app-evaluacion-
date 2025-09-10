import React, { useState, useEffect } from 'react';
import { CourseModule, Question } from '../types';
import { CheckCircleIcon, XCircleIcon } from './IconComponents';

interface QuizViewProps {
  module: CourseModule;
  onQuizComplete: (score: number, totalQuestions: number) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ module, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion: Question = module.questions[currentQuestionIndex];
  
  useEffect(() => {
    // Reset state when module changes
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowExplanation(false);
  }, [module]);


  const handleAnswerSelect = (optionIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(optionIndex);
    setIsAnswered(true);
    if (optionIndex === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < module.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowExplanation(false);
    } else {
      onQuizComplete(score, module.questions.length);
    }
  };

  const getButtonClass = (optionIndex: number): string => {
    const baseClass = "w-full text-left p-4 my-2 rounded-lg border-2 transition-all duration-300 transform focus:outline-none flex items-center justify-between";
    
    if (!isAnswered) {
      return `${baseClass} border-slate-600 bg-slate-700 hover:bg-slate-600 hover:border-yellow-400`;
    }

    const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
    const isSelected = optionIndex === selectedAnswer;

    if (isCorrect) {
      return `${baseClass} border-green-500 bg-green-900/50 text-white font-semibold scale-105`;
    }
    if (isSelected && !isCorrect) {
      return `${baseClass} border-red-500 bg-red-900/50 text-white font-semibold`;
    }
    
    return `${baseClass} border-slate-700 bg-slate-800 text-slate-400 cursor-not-allowed opacity-60`;
  };

  return (
    <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-700 animate-fade-in">
      <div className="mb-6">
        <p className="text-sm font-medium text-yellow-400">Pregunta {currentQuestionIndex + 1} de {module.questions.length}</p>
        <h3 className="text-xl sm:text-2xl font-semibold mt-1">{currentQuestion.questionText}</h3>
      </div>
      
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={isAnswered}
            className={getButtonClass(index)}
          >
            <span>{option}</span>
            {isAnswered && (
                <>
                    {index === currentQuestion.correctAnswerIndex && <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />}
                    {index === selectedAnswer && index !== currentQuestion.correctAnswerIndex && <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />}
                </>
            )}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div 
            role="alert"
            className={`mt-6 p-4 rounded-lg animate-fade-in ${selectedAnswer === currentQuestion.correctAnswerIndex ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'} border`}>
            {selectedAnswer === currentQuestion.correctAnswerIndex ? (
                 <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1"/>
                    <div>
                        <h4 className="font-bold text-green-300">¡Correcto!</h4>
                        <p className="text-sm text-slate-300 mt-1">{currentQuestion.explanation}</p>
                    </div>
                 </div>
            ) : (
                <div className="flex items-start">
                    <XCircleIcon className="w-6 h-6 mr-3 text-red-400 flex-shrink-0 mt-1"/>
                    <div>
                        <h4 className="font-bold text-red-300">Incorrecto</h4>
                        <p className="text-sm text-slate-300 mt-1">{currentQuestion.explanation}</p>
                    </div>
                </div>
            )}
        </div>
      )}

      {isAnswered && (
         <button
          onClick={handleNext}
          className="w-full mt-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
        >
          {currentQuestionIndex < module.questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Evaluación'}
        </button>
      )}
    </div>
  );
};

export default QuizView;
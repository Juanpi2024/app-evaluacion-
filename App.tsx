
import React, { useState, useCallback, useMemo } from 'react';
import { COURSE_DATA } from './constants/courseData';
import { CourseModule } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import ModuleView from './components/ModuleView';
import QuizView from './components/QuizView';
import CompletionScreen from './components/CompletionScreen';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';

type ViewState = 'welcome' | 'module' | 'quiz' | 'complete';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('welcome');
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [unlockedModulesCount, setUnlockedModulesCount] = useState(1);
  const [quizScores, setQuizScores] = useState<number[]>([]);

  const currentModule = useMemo(() => COURSE_DATA[currentModuleIndex], [currentModuleIndex]);

  const handleStartCourse = useCallback(() => {
    setView('module');
  }, []);

  const handleStartQuiz = useCallback(() => {
    setView('quiz');
  }, []);

  const handleQuizComplete = useCallback((score: number, totalQuestions: number) => {
    const percentage = (score / totalQuestions) * 100;
    const passed = percentage >= 70;
    
    setQuizScores(prevScores => {
        const newScores = [...prevScores];
        newScores[currentModuleIndex] = percentage;
        return newScores;
    });

    if (passed) {
      if (currentModuleIndex < COURSE_DATA.length - 1) {
        setUnlockedModulesCount(prev => Math.max(prev, currentModuleIndex + 2));
        setCurrentModuleIndex(prev => prev + 1);
        setView('module');
      } else {
        setView('complete');
      }
    } else {
      alert(`No has alcanzado el 70% de respuestas correctas. Tu puntaje fue ${percentage.toFixed(0)}%. Por favor, repasa el módulo e inténtalo de nuevo.`);
      setView('module');
    }
  }, [currentModuleIndex]);

  const handleReset = useCallback(() => {
    setView('welcome');
    setCurrentModuleIndex(0);
    setUnlockedModulesCount(1);
    setQuizScores([]);
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStartCourse} />;
      case 'module':
        return <ModuleView module={currentModule} onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return <QuizView module={currentModule} onQuizComplete={handleQuizComplete} />;
      case 'complete':
        return <CompletionScreen scores={quizScores} onReset={handleReset} />;
      default:
        return <WelcomeScreen onStart={handleStartCourse} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header />
      <main className="w-full max-w-4xl mx-auto flex-grow flex flex-col">
        {view !== 'welcome' && (
          <ProgressBar
            totalModules={COURSE_DATA.length}
            currentModuleIndex={currentModuleIndex}
            unlockedModulesCount={unlockedModulesCount}
            setView={setView}
            setCurrentModuleIndex={setCurrentModuleIndex}
          />
        )}
        <div className="mt-8 flex-grow">
          {renderContent()}
        </div>
      </main>
      <footer className="text-center text-xs text-slate-500 mt-8">
        <p>Reglamento Interno de Evaluación y Promoción 2025</p>
        <p>Centro de Educación Integrada de Adultos “Juanita Zúñiga Fuentes”</p>
      </footer>
    </div>
  );
};

export default App;

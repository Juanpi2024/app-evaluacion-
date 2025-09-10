
import React from 'react';
import { CourseModule } from '../types';
import { CheckCircleIcon } from './IconComponents';

interface ModuleViewProps {
  module: CourseModule;
  onStartQuiz: () => void;
}

const ModuleView: React.FC<ModuleViewProps> = ({ module, onStartQuiz }) => {
  const { title, content, icon: Icon } = module;

  return (
    <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-700 animate-fade-in">
      <div className="flex items-center mb-6">
        <div className="bg-slate-700 p-3 rounded-full mr-4">
           <Icon className="w-8 h-8 text-yellow-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-yellow-400">Módulo {module.id}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
        </div>
      </div>

      <div className="space-y-4 text-slate-300 leading-relaxed">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-3">¡Listo para la evaluación!</h3>
        <p className="text-slate-400 mb-6">
          A continuación, responderás algunas preguntas para verificar tu comprensión de este módulo. Necesitas al menos un 70% de aciertos para desbloquear el siguiente nivel.
        </p>
        <button
          onClick={onStartQuiz}
          className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          <CheckCircleIcon className="w-5 h-5 mr-2" />
          Comenzar Evaluación
        </button>
      </div>
    </div>
  );
};

export default ModuleView;

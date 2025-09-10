
import React, { useState } from 'react';
import { COURSE_DATA } from '../constants/courseData';
import { MailIcon } from './IconComponents';

interface CompletionScreenProps {
  scores: number[];
  onReset: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ scores, onReset }) => {
  const [email, setEmail] = useState('');
  const totalScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
    
  const handleSendEmail = () => {
    if (!email) {
      alert('Por favor, introduce una dirección de correo electrónico.');
      return;
    }

    const subject = "Resultados del Mini-Curso CEIA Parral";
    
    const resultsText = COURSE_DATA.map((module, index) => 
        `- ${module.title}: ${scores[index] !== undefined ? `${scores[index].toFixed(0)}%` : 'N/A'}`
    ).join('\n');

    const body = `¡Hola!\n\nAquí están mis resultados del Mini-Curso Interactivo sobre el Reglamento de Evaluación y Promoción del CEIA Parral.\n\nResumen de Desempeño:\n${resultsText}\n\nPuntaje Final Promedio: ${totalScore.toFixed(0)}%\n\nEste es un correo generado automáticamente desde el Mini Campus Virtual del CEIA Parral.`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-800 rounded-2xl shadow-2xl animate-fade-in">
      <div className="w-24 h-24 mb-6 rounded-full bg-green-500 flex items-center justify-center text-5xl">
        🎉
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
        ¡Felicitaciones!
      </h1>
      <p className="text-lg md:text-xl text-slate-300 mb-6">
        Has completado el mini-curso con éxito.
      </p>
      
      <div className="w-full max-w-md my-4 p-4 bg-slate-700/50 rounded-lg">
        <h3 className="font-bold text-lg mb-4 text-yellow-400">Resumen de tu Desempeño</h3>
        <ul className="space-y-2 text-left">
          {COURSE_DATA.map((module, index) => (
            <li key={module.id} className="flex justify-between items-center text-sm">
              <span className="text-slate-300">{module.title}</span>
              <span className={`font-semibold ${scores[index] >= 70 ? 'text-green-400' : 'text-red-400'}`}>
                {scores[index] !== undefined ? `${scores[index].toFixed(0)}%` : 'N/A'}
              </span>
            </li>
          ))}
        </ul>
        <div className="border-t border-slate-600 mt-4 pt-4 flex justify-between font-bold">
            <span>Puntaje Final Promedio:</span>
            <span className="text-yellow-400 text-lg">{totalScore.toFixed(0)}%</span>
        </div>
      </div>

      <p className="max-w-2xl text-slate-400 mb-4">
        Ahora tienes un conocimiento sólido sobre el Reglamento de Evaluación y Promoción del CEIA Parral.
      </p>

      <div className="w-full max-w-md my-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
        <h3 className="font-bold text-lg mb-4 text-yellow-400">Compartir Resultados</h3>
        <p className="text-slate-400 text-sm mb-4">
          Introduce tu correo electrónico para enviarte una copia de tus resultados.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.correo@ejemplo.com"
                className="flex-grow px-4 py-2 bg-slate-800 border-2 border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white"
                aria-label="Correo electrónico para enviar resultados"
            />
            <button
                onClick={handleSendEmail}
                disabled={!email}
                className="flex items-center justify-center px-6 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-500 transition-colors disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed"
            >
                <MailIcon className="w-5 h-5 mr-2" />
                Enviar
            </button>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-4 px-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        Volver a Empezar
      </button>
    </div>
  );
};

export default CompletionScreen;

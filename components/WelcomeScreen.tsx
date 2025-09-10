
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-800 rounded-2xl shadow-2xl animate-fade-in">
      <img src="https://picsum.photos/seed/ceia-parral/150/150" alt="CEIA Parral" className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-6 border-4 border-yellow-400" />
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
        Bienvenido al Mini-Curso Interactivo
      </h1>
      <p className="text-lg md:text-xl text-slate-300 mb-6">
        Reglamento de Evaluación y Promoción del CEIA Parral
      </p>
      <p className="max-w-2xl text-slate-400 mb-8">
        Prepárate para una experiencia de aprendizaje gamificada. Navega a través de los módulos, aprende los puntos clave del reglamento y pon a prueba tus conocimientos para avanzar. ¡Tu viaje por el mini campus virtual comienza ahora!
      </p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        Comenzar Aprendizaje
      </button>
    </div>
  );
};

export default WelcomeScreen;

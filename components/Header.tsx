
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-4xl mx-auto mb-8 text-center sm:text-left">
      <div className="flex items-center justify-center sm:justify-start">
        <div className="p-2 bg-slate-800 rounded-lg mr-4">
          <img src="https://i.imgur.com/eB39959.png" alt="Logo CEIA" className="h-12 w-12" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">CEIA Parral "Juanita Zúñiga Fuentes"</h1>
          <p className="text-sm text-yellow-400">Mini Campus Virtual</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

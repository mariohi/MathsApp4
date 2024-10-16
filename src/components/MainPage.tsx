import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, X, Divide, HelpCircle } from 'lucide-react';

function MainPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-white text-3xl font-bold text-center mb-8">
        What do you want to practice?
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { icon: Plus, label: 'Addition', path: '/' },
          { icon: Minus, label: 'Subtraction', path: '/' },
          { icon: X, label: 'Multiplication', path: '/multiply-config' },
          { icon: Divide, label: 'Division', path: '/' },
        ].map(({ icon: Icon, label, path }) => (
          <Link
            key={label}
            to={path}
            className="bg-orange-300 hover:bg-orange-200 text-white p-8 rounded-lg flex flex-col items-center justify-center transition-colors"
          >
            <Icon size={48} />
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-white hover:text-orange-200 transition-colors">
          <HelpCircle size={24} />
          <span className="sr-only">Help</span>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
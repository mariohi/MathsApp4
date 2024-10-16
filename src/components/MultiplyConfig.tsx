import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function MultiplyConfig() {
  const navigate = useNavigate();
  const [selectedTables, setSelectedTables] = useState<number[]>([]);
  const [questions, setQuestions] = useState(20);
  const [timer, setTimer] = useState(0);

  const handleTableSelection = (table: number) => {
    setSelectedTables(prev =>
      prev.includes(table)
        ? prev.filter(t => t !== table)
        : [...prev, table]
    );
  };

  const handleStart = () => {
    if (selectedTables.length === 0) {
      alert('Please select at least one times table');
      return;
    }
    navigate('/multiply-practice', { state: { selectedTables, questions, timer } });
  };

  return (
    <div className="w-full max-w-md relative">
      <button
        onClick={() => navigate('/')}
        className="absolute top-0 left-0 text-white hover:text-orange-200 transition-colors"
        aria-label="Go back to main page"
      >
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-white text-3xl font-bold text-center mb-8">Practice Multiplications</h1>
      
      <h2 className="text-white text-2xl font-bold mb-4">Select Times Tables</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
          <button
            key={num}
            onClick={() => handleTableSelection(num)}
            className={`p-4 rounded-lg text-xl font-bold ${
              selectedTables.includes(num) ? 'bg-orange-600 text-white' : 'bg-orange-200 text-orange-800'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <h2 className="text-white text-2xl font-bold mb-4">Questions to answer</h2>
      <div className="flex justify-between mb-8">
        {[5, 10, 20, 50, 100].map(num => (
          <button
            key={num}
            onClick={() => setQuestions(num)}
            className={`p-4 rounded-lg text-xl font-bold ${
              questions === num ? 'bg-orange-600 text-white' : 'bg-orange-200 text-orange-800'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <h2 className="text-white text-2xl font-bold mb-4">Timer (minutes)</h2>
      <div className="flex justify-between mb-8">
        {[0, 1, 3, 5, 10, 15].map(num => (
          <button
            key={num}
            onClick={() => setTimer(num)}
            className={`p-4 rounded-lg text-xl font-bold ${
              timer === num ? 'bg-orange-600 text-white' : 'bg-orange-200 text-orange-800'
            }`}
          >
            {num === 0 ? '∞' : num}
          </button>
        ))}
      </div>

      <button
        onClick={handleStart}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors"
      >
        Start
      </button>
    </div>
  );
}

export default MultiplyConfig;
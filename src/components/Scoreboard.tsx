import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ScoreboardState {
  score: number;
  totalQuestions: number;
  timeSpent: number;
}

function Scoreboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, timeSpent } = location.state as ScoreboardState;

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="w-full max-w-md text-center">
      <h1 className="text-white text-4xl font-bold mb-8">Scoreboard</h1>
      <div className="text-white text-6xl font-bold mb-8">{percentage}%</div>
      <div className="bg-orange-300 rounded-lg p-6 mb-8">
        <div className="flex justify-between text-orange-800 text-xl mb-2">
          <span>Questions</span>
          <span>{totalQuestions}</span>
        </div>
        <div className="flex justify-between text-orange-800 text-xl mb-2">
          <span>Correct</span>
          <span>{score}</span>
        </div>
        <div className="flex justify-between text-orange-800 text-xl mb-2">
          <span>Wrong</span>
          <span>{totalQuestions - score}</span>
        </div>
        <div className="flex justify-between text-orange-800 text-xl">
          <span>Time</span>
          <span>{Math.floor(timeSpent / 60)} mins {timeSpent % 60} secs</span>
        </div>
      </div>
      <button
        onClick={() => navigate('/multiply-config')}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors"
      >
        Done
      </button>
    </div>
  );
}

export default Scoreboard;
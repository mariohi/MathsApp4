import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface PracticeState {
  selectedTables: number[];
  questions: number;
  timer: number;
}

function MultiplyPractice() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTables, questions, timer } = location.state as PracticeState;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timer * 60);

  useEffect(() => {
    generateQuestion();
  }, []);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          endPractice();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const generateQuestion = () => {
    const randomTable = selectedTables[Math.floor(Math.random() * selectedTables.length)];
    const randomMultiplier = Math.floor(Math.random() * 12) + 1;
    setFirstNumber(randomTable);
    setSecondNumber(randomMultiplier);
  };

  const handleSubmit = () => {
    const isCorrect = parseInt(answer) === firstNumber * secondNumber;
    if (isCorrect) setScore(score + 1);
    setAnswer('');
    if (currentQuestion < questions) {
      setCurrentQuestion(currentQuestion + 1);
      generateQuestion();
    } else {
      endPractice();
    }
  };

  const endPractice = () => {
    navigate('/scoreboard', {
      state: {
        score,
        totalQuestions: questions,
        timeSpent: timer * 60 - timeLeft,
      },
    });
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between mb-4">
        <button onClick={endPractice} className="text-white text-xl font-bold">
          Stop
        </button>
        <div className="text-white text-xl font-bold">
          {timer > 0 && `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}
        </div>
        <div className="text-white text-xl font-bold">
          {currentQuestion}/{questions}
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 mb-8">
        <div className="text-6xl font-bold text-center mb-4">
          {firstNumber} x {secondNumber}
        </div>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full text-4xl font-bold text-center p-4 border-b-2 border-orange-400 focus:outline-none focus:border-orange-600"
          autoFocus
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '⏎'].map((key) => (
          <button
            key={key}
            onClick={() => {
              if (key === 'C') setAnswer('');
              else if (key === '⏎') handleSubmit();
              else setAnswer(prev => prev + key);
            }}
            className="bg-orange-200 hover:bg-orange-300 text-orange-800 font-bold py-4 px-6 rounded-lg text-2xl transition-colors"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MultiplyPractice;
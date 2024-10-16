import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import MultiplyConfig from './components/MultiplyConfig';
import MultiplyPractice from './components/MultiplyPractice';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-orange-400 flex flex-col items-center justify-center px-4 py-8">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/multiply-config" element={<MultiplyConfig />} />
          <Route path="/multiply-practice" element={<MultiplyPractice />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
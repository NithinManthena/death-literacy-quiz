import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import TopicSelection from './components/TopicSelection';
import QuizPage from './components/QuizPage';
import DashboardPage from './components/DashboardPage'; // Placeholder if needed
import ScorePage from './components/ScorePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select-topics" element={<TopicSelection />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/how-it-works" element={<div>How it works? (Coming soon)</div>} />
        <Route path="/features" element={<div>Features (Coming soon)</div>} />
        <Route path="/about-us" element={<div>About Us (Coming soon)</div>} />
        <Route path="/dashboard" element={<DashboardPage />} /> {/* Optional for later */}
      </Routes>
    </Router>
  );
}

export default App;

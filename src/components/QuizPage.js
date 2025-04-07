import React, { useState } from 'react';
import './QuizPage.css';

const questions = [
  {
    question: 'An interface design application that runs in the browser with team-based collaborative design projects',
    options: ['FIGMA', 'ADOBE XD', 'INVISION', 'SKETCH'],
    answer: 'FIGMA',
  },
  // You can add more questions as needed
];

function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  return (
    <div className="quiz-container">
      {/* Header with branding and navigation */}
      <header className="quiz-header">
        <div className="logo">🎓 <span className="eternal">Eternal</span> <span className="wisdom">Wisdom</span></div>
        <nav className="nav-links">
          <button className="nav-btn">How it works?</button>
          <button className="nav-btn">Features</button>
          <button className="nav-btn">About us</button>
          <span className="user">👤 Profile</span>
        </nav>
      </header>

      {/* Progress tracker */}
      <div className="progress-bar">
        {[...Array(questions.length)].map((_, idx) => (
          <div key={idx} className={`circle ${idx === current ? 'active' : ''}`}>{idx + 1}</div>
        ))}
      </div>

      {/* Question and Options */}
      <div className="question-section">
        <h2>{questions[current].question}</h2>
        <div className="options">
          {questions[current].options.map((opt, idx) => (
            <div
              key={idx}
              className={`option ${selected === idx ? 'selected' : ''}`}
              onClick={() => setSelected(idx)}
            >
              <strong>{String.fromCharCode(65 + idx)}.</strong> {opt}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="quiz-footer">
        <button className="prev-btn" onClick={handlePrev}>◀ Previous</button>
        <button className="next-btn" onClick={handleNext}>Next ▶</button>
        <button className="skip-btn" onClick={handleSkip}>Skip ➤</button>
      </div>
    </div>
  );
}

export default QuizPage;

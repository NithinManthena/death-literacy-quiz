// src/components/ScorePage.js
import React from 'react';
import './ScorePage.css';

function ScorePage() {
  const score = 4; // Replace with dynamic score later

  return (
    <div className="score-container">
      <header className="score-header">
        <div className="logo">
          <img src="https://i.pinimg.com/236x/24/cd/1e/24cd1ef9c2266b481ce88ed704b97d9f.jpg" alt="Logo" />
          <span className="eternal">Eternal</span> <span className="wisdom">Wisdom</span>
        </div>
        <nav className="nav-links">
          <button className="nav-link-btn">How it works?</button>
          <button className="nav-link-btn">Features</button>
          <button className="nav-link-btn">About us</button>
          <span className="user">👤 Profile</span>
        </nav>
      </header>

      <div className="score-content">
        <h2>🎉 Congratulations!</h2>
        <div className="score-circle">
          <p className="score-text">Your score</p>
          <h1>{score}</h1>
        </div>
      </div>
    </div>
  );
}

export default ScorePage;

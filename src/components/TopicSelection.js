import React, { useState } from 'react';
import './TopicSelection.css'; // This is the CSS we created
import { useNavigate } from 'react-router-dom';

const topicsList = ['TagBadge', 'History', 'Health', 'End-of-Life', 'Ethics', 'Culture', 'Law', 'Faith'];

function TopicSelection() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (topic) => {
    if (selected.includes(topic)) {
      setSelected(selected.filter(t => t !== topic));
    } else {
      setSelected([...selected, topic]);
    }
  };

  const handleStart = () => {
    if (selected.length >= 3) {
      // TODO: send to backend later if needed
      navigate('/quiz'); // Redirect to quiz page
    } else {
      alert("Please select at least 3 topics.");
    }
  };

  return (
    <div className="topic-selection-container">
      <div className="topic-navbar">
        <div className="logo">🎓 Eternal <span>Wisdom</span></div>
        <nav>
          <a href="/how-it-works">How it works?</a>
          <a href="/features">Features</a>
          <a href="/about-us">About us</a>
          <div className="user-menu">👤 Profile ▾</div>
        </nav>
      </div>

      <div className="topic-content">
        <h1>Choose your favorite topic</h1>
        <p>Select more than 2 topics to start quiz</p>

        <div className="topics-grid">
          {topicsList.map(topic => (
            <div
              key={topic}
              className={`topic-badge ${selected.includes(topic) ? 'selected' : ''}`}
              onClick={() => toggleSelect(topic)}
            >
              {topic}
              {selected.includes(topic) && <span className="remove">✕</span>}
            </div>
          ))}
        </div>

        <button
          className="start-quiz-button"
          onClick={handleStart}
          disabled={selected.length < 3}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default TopicSelection;

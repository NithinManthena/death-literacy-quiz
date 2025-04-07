import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional: if you split CSS into a new file

function HomePage() {
  return (
    <div className="home-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Eternal <span style={{ color: '#FCC822' }}>Wisdom</span></div>
        <ul className="navbar-links">
          <li><Link to="/how-it-works">How it works?</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="left-section">
          <h1>Learn new concepts<br />for each question</h1>
          <p>We help you enhance your death literacy knowledge.</p>
          <Link to="/know-more" className="know-more">Know more</Link>
        </div>

        <div className="right-section">
          <img src="https://static.vecteezy.com/system/resources/previews/009/865/736/non_2x/library-book-store-and-e-book-illustrations-of-a-man-and-a-woman-read-books-in-front-of-the-bookshelf-concepts-for-graphic-and-web-design-bookstore-and-library-e-book-vector.jpg" alt="Illustration" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

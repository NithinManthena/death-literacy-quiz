import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">🎓 Eternal <span className="highlight">Wisdom</span></span>
      </div>
      <ul className="navbar-center">
        <li><Link to="#">How it works?</Link></li>
        <li><Link to="#">Features</Link></li>
        <li><Link to="#">About us</Link></li>
      </ul>
      <div className="navbar-right">
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

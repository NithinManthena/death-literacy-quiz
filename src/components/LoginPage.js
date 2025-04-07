import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login clicked");
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="https://i.pinimg.com/236x/24/cd/1e/24cd1ef9c2266b481ce88ed704b97d9f.jpg" alt="Logo" className="logo-img" />
        <h1 className="logo-text">
          <span style={{ fontWeight: 'normal' }}>Eternal </span>
          <span style={{ color: '#fcc822', fontWeight: 'bold' }}>Wisdom</span>
        </h1>
      </div>

      <div className="login-box">
        <div className="login-left">
          <h2>Welcome back!</h2>
          <p>Please login/Signup to your account.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

            <div className="form-options">
              <label><input type="checkbox" /> Remember Me</label>
              <button type="button" className="link-button" onClick={() => navigate('/forgot-password')}>
                Forgot Password?
              </button>
            </div>

            <div className="form-buttons">
              <button className="btn login" type="submit">Login</button>
              <button className="btn signup" type="button" onClick={() => navigate('/signup')}>Signup</button>
            </div>
          </form>

          <div className="social-login">
            <p>Or login with</p>
            <button className="social-link">Facebook</button>
            <button className="social-link">Google</button>
            <button className="social-link">Admin</button>
          </div>
        </div>
        <div className="testing-links">
            <button onClick={() => navigate('/select-topics')}>🚀 Go to Topics (Test)</button>
            <button onClick={() => navigate('/quiz')}>🧠 Go to Quiz (Test)</button>
         </div>
 
        <div className="login-right">
          <img
            src="https://i.pinimg.com/236x/24/cd/1e/24cd1ef9c2266b481ce88ed704b97d9f.jpg"
            alt="Illustration"
            className="grad-img"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

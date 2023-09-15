import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const handleLogin = () => {
    setShowUsernameError(false);
    setShowPasswordError(false);

    if (username === '') {
      setShowUsernameError(true);
      return;
    }

    if (password === '') {
      setShowPasswordError(true);
      return;
    }

    alert('Login successful!');
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className={`form-group ${showUsernameError ? 'error' : ''}`}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {showUsernameError && <div className="error-message">Username not found</div>}
          </div>
          <div className={`form-group ${showPasswordError ? 'error' : ''}`}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPasswordError && <div className="error-message">Password not found</div>}
          </div>
          <button type="button" id="login-button" onClick={handleLogin}>
            Login
          </button>
          <p>Don't have an account? <Link to="/SignUp"> <button id="signup-button">Sign Up</button></Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;

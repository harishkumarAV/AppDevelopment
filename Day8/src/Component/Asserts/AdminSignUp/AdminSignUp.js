import React, { useState } from 'react';
import './AdminSignUp.css';
import { Link } from 'react-router-dom';
import bg from '../Assets/bgpic.png';
import { Navigate } from 'react-router-dom'; 

function AdminSignUp() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState(''); 
  const [showNameError, setShowNameError] = useState(false);
  const [showMailError, setShowMailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleSignUp = () => {
    setShowNameError(false);
    setShowMailError(false);
    setShowPasswordError(false);
    setShowConfirmPasswordError(false);

    if (name === '') {
      setShowNameError(true);
      return;
    }

    if (mail === '') {
      setShowMailError(true);
      return;
    }

    if (password === '') {
      setShowPasswordError(true);
      return;
    }

    if (confirmPassword === '') {
      setShowConfirmPasswordError(true);
      return;
    }

    if (password !== confirmPassword) {
      setShowPasswordError(true);
      setShowConfirmPasswordError(true);
      return;
    }

    setRegistrationSuccessful(true);
  };

  return (
    <div
      className="containerss"
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'right', backgroundSize: 'cover' }}
    >
      <div className="signup-form">
        <h2>Register as Admin</h2>
        <form>
          <div className={`form-group ${showNameError ? 'error' : ''}`}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {showNameError && <div className="error-message">Name is required</div>}
          </div>
          <div className={`form-group ${showMailError ? 'error' : ''}`}>
            <input
              type="email"
              id="mail"
              placeholder="Mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            {showMailError && <div className="error-message">Mail is required</div>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="companyName"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className={`form-group ${showPasswordError ? 'error' : ''}`}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPasswordError && <div className="error-message">Passwords do not match</div>}
          </div>
          <div className={`form-group ${showConfirmPasswordError ? 'error' : ''}`}>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {showConfirmPasswordError && (
              <div className="error-message">Passwords do not match</div>
            )}
          </div>

          {registrationSuccessful ? (
            <Navigate to="/PageNotAvailable">
              <button type="button" id="register-button">
                Register
              </button>
            </Navigate>
          ) : (
            <button type="button" id="register-button" onClick={handleSignUp}>
              Register
            </button>
          )}

          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AdminSignUp;

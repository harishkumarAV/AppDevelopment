import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import bg from '../Assets/bgpic.png';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showMobileNoError, setShowMobileNoError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const handleSignUp = async () => {
    setShowUsernameError(false);
    setShowEmailError(false);
    setShowMobileNoError(false);
    setShowPasswordError(false);

    if (username === '') {
      setShowUsernameError(true);
      return;
    }

    if (email === '') {
      setShowEmailError(true);
      return;
    }

    if (mobileNo === '') {
      setShowMobileNoError(true);
      return;
    }

    if (password === '') {
      setShowPasswordError(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        username: username,
        emailid: email,
        mobileno: mobileNo,
        password: password,
      });

      if (response.status === 200) {
        setRegistrationSuccessful(true);
      } else {
        setRegistrationError('Registration failed. Please try again.'); // Handle registration error
      }
    } catch (error) {
      console.error(error);
      setRegistrationError('An error occurred during registration.'); // Handle network or other errors
    }
  };

  return (
    <div
      className="containers"
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'right', backgroundSize: 'cover' }}
    >
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <div className={`form-group ${showUsernameError ? 'error' : ''}`}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {showUsernameError && <div className="error-message">Username is required</div>}
          </div>
          <div className={`form-group ${showEmailError ? 'error' : ''}`}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {showEmailError && <div className="error-message">Email is required</div>}
          </div>
          <div className={`form-group ${showMobileNoError ? 'error' : ''}`}>
            <input
              type="text"
              id="mobileNo"
              placeholder="Mobile Number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
            {showMobileNoError && <div className="error-message">Mobile Number is required</div>}
          </div>
          <div className={`form-group ${showPasswordError ? 'error' : ''}`}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPasswordError && <div className="error-message">Password is required</div>}
          </div>

          {registrationSuccessful ? (
            <Link to="/">
              <button type="button" id="register-button">
                Register
              </button>
            </Link>
          ) : (
            <button type="button" id="register-button" onClick={handleSignUp}>
              Register
            </button>
          )}

          {registrationError && <div className="error-message">{registrationError}</div>}

          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaCheckCircle } from 'react-icons/fa'; 
import './Success.css'; 

export default function Success() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <div className={`success-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="success-content">
        <FaCheckCircle className="success-icon" />
        <h2>Successfully Applied</h2>
        <Link to="/Home" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

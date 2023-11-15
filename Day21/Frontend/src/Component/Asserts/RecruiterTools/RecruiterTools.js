import React from 'react';
import { Link } from 'react-router-dom';
import './RecruiterTools.css'; 

export default function RecruiterTools() {
  return (
    <div className="recruiter-tools-container">
      <h3>Welcome to Recruiter Tools. </h3>
      <div className="button-container">
        <Link to="/AddJobForm">
          <button className="recruiter-button">Post a Job</button>
        </Link>
        <Link to="/Manage">
          <button className="recruiter-button">Manage Your Jobs</button>
        </Link>
      </div>
    </div>
  );
}

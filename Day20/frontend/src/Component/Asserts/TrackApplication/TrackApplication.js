import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './TrackApplication.css'; // Import your CSS file

function TrackApplication() {
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    axios.get(`http://localhost:8080/api/jobApplication`) // Use the correct endpoint
      .then((response) => {
        setJobApplications(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API Error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card-container">
      {jobApplications.map((jobApplication, index) => (
        <div className="card" key={index}>
          <h3> {jobApplication.jobName}</h3>
          <p><strong>Description:</strong> {jobApplication.jobDescription}</p>
          {/* You can add more job application details here */}
          <Link to="/searchjobpage">
            <button className="go-back-button">Go Back</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TrackApplication;

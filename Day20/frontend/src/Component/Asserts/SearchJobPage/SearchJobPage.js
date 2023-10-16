import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate
import './SearchJobPage.css';
import axios from 'axios';

function SearchJobPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [jobList, setJobList] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    axios.get('http://localhost:8080/api/searchJob')
      .then((response) => {
        setJobList(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    const results = jobList.filter((job) =>
      job.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleApply = (job) => {
    // Create a JobApplication object to send to the backend
    const jobApplication = {
      jobId: job.id,
      jobName: job.name,
      jobDescription: job.description,
      imageUrl: job.imageUrl,
    };

    // Make a POST request to your backend endpoint for applying to the job
    axios.post('http://localhost:8080/api/applyJob', jobApplication)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log('Applied successfully');
        navigate('/JobForm'); // Use navigate to go to the TrackApplication page
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error('Error applying:', error);
      });
  };

  return (
    <div>
      <div className='hero'>
        <h2 className="hero-head">Get Hired, Get Inspired!</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="job-list">
          {searchResults.length > 0 ? (
            searchResults.map((job) => (
              <div className="job" key={job.id}>
                <img src={job.imageUrl} alt={job.name} className="st" />
                <h3>{job.name}</h3>
                <p>{job.description}</p>
                <button onClick={() => handleApply(job)}>Easy apply!</button> {/* Updated button */}
              </div>
            ))
          ) : (
            jobList.map((job) => (
              <div className="job" key={job.id}>
                <img src={job.imageUrl} alt={job.name} className="st" />
                <h3>{job.name}</h3>
                <p>{job.description}</p>
                <button onClick={() => handleApply(job)}>Easy apply!</button> {/* Updated button */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchJobPage;

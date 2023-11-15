import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addJob } from '../redux/SearchSlice';
import axios from 'axios';

import './AddJobForm.css'; // Import your custom CSS for styling

function AddJobForm() {
  const [jobData, setJobData] = useState({
    name: '',
    description: '',
    imageUrl: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    axios
      .post('http://localhost:8080/api/createJob', jobData)
      .then((response) => {
        const createdJob = response.data;
        dispatch(addJob(createdJob));
        setJobData({ name: '', description: '', imageUrl: '' });
        navigate('/SearchJobPage');
      })
      .catch((error) => {
        console.error(error);

        console.log('Response Data:', error.response.data);
        console.log('Error Status:', error.response.status);
      });
  };

  return (
    <div className="add-job-form-container">
      <h1>Give Your Posting Details</h1> 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Job Name</label>
          <input
            type="text"
            id="name"
            value={jobData.name}
            onChange={(e) => setJobData({ ...jobData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            value={jobData.description}
            onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            value={jobData.imageUrl}
            onChange={(e) => setJobData({ ...jobData, imageUrl: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddJobForm;

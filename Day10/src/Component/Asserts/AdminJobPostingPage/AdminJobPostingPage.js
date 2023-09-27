
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postJob } from '../redux/jobSlice';

function AdminJobPostingPage() {
  const dispatch = useDispatch();
  const [jobDetails, setJobDetails] = useState({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevJobDetails) => ({
      ...prevJobDetails,
      [name]: value,
    }));
  };

  const handlePostJob = () => {
    dispatch(postJob(jobDetails));
     
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form>
        <div>
          <label>Company Name:</label>
          <input type="text" name="companyName" onChange={handleChange} />
        </div>
        <button type="button" onClick={handlePostJob}>
          Post Job
        </button>
      </form>
    </div>
  );
}

export default AdminJobPostingPage;

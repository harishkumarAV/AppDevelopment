import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobForm.css';
import axios from 'axios';

export default function JobForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'male',
    contact: '',
    ctc: '',
    qualification: '',
    domain: '',
    github: '',
    linkedin: '',
    other: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
      const response = await axios.post('http://localhost:8080/api/UserEntitys/postuser', formData);
      console.log(response.data);
      navigate("/success");
      // Redirect to the success page or handle the response accordingly
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="job-form-container">
      <h2 className="jobapp">Easy Apply!</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange} />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" name="contact" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="ctc">Current CTC:</label>
          <input type="text" id="ctc" name="ctc" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Highest Qualification:</label>
          <select id="qualification" name="qualification" required onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">Ph.D.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="domain">Interested Domain:</label>
          <input type="text" id="domain" name="domain" required onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub Link:</label>
          <input type="url" id="github" name="github" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Link:</label>
          <input type="url" id="linkedin" name="linkedin" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="other">Other Links:</label>
          <input type="url" id="other" name="other" onChange={handleInputChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="resume">Choose Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx" 
            onChange={handleResumeChange}
          />
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

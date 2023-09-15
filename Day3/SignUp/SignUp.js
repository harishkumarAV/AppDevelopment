import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    workStatus: 'student',
    sex: 'male',
    age: '',
    interestedDomain: '',
    email: '',
    password: '',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Signup successful!');
  };

  return (
    <div className="SignUp">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="workStatus">Current Work Status</label>
        <select
          id="workStatus"
          name="workStatus"
          value={formData.workStatus}
          onChange={handleChange}
          required
        >
          <option value="student">Student</option>
          <option value="officer">Employee</option>
        </select>

        <label htmlFor="sex">Gender</label>
        <input
          type="radio"
          id="male"
          name="sex"
          value="male"
          checked={formData.sex === 'male'}
          onChange={handleChange}
          required
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          name="sex"
          value="female"
          checked={formData.sex === 'female'}
          onChange={handleChange}
          required
        />
        <label htmlFor="female">Female</label>

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="interestedDomain">Interested Domain</label>
        <input
          type="text"
          id="interestedDomain"
          name="interestedDomain"
          value={formData.interestedDomain}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

import React, { useState } from 'react';
import './AdminDashboard.css';
const AdminDashboard = () => {
  const staticUserData = {
    name: 'Harish Kumar A V',
    email: 'HarishKumar@gmail.com',
    dob: '15-05-2003',
    sex: 'Male',
    jobExperience: '5 years',
    currentJob: 'Software Engineer',
    currentCTC: '80,00,000 LPA',
    interestedDomain: 'Web Development',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...staticUserData });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    
    setEditedUser({ ...editedUser });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedUser({ ...staticUserData });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="admin-dashboard">
      <h2>My Profile</h2>
      <div className="admin-info">
        {isEditing ? (
          <>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={editedUser.dob}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="sex">Sex:</label>
              <input
                type="text"
                id="sex"
                name="sex"
                value={editedUser.sex}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="jobExperience">Job Experience:</label>
              <input
                type="text"
                id="jobExperience"
                name="jobExperience"
                value={editedUser.jobExperience}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="currentJob">Current Job:</label>
              <input
                type="text"
                id="currentJob"
                name="currentJob"
                value={editedUser.currentJob}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="currentCTC">Current CTC:</label>
              <input
                type="text"
                id="currentCTC"
                name="currentCTC"
                value={editedUser.currentCTC}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="interestedDomain">Interested Domain:</label>
              <input
                type="text"
                id="interestedDomain"
                name="interestedDomain"
                value={editedUser.interestedDomain}
                onChange={handleInputChange}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <strong>Name:</strong> {staticUserData.name}
            </div>
            <div>
              <strong>Email:</strong> {staticUserData.email}
            </div>
            <div>
              <strong>Date of Birth:</strong> {staticUserData.dob}
            </div>
            <div>
              <strong>Sex:</strong> {staticUserData.sex}
            </div>
            <div>
              <strong>Job Experience:</strong> {staticUserData.jobExperience}
            </div>
            <div>
              <strong>Current Job:</strong> {staticUserData.currentJob}
            </div>
            <div>
              <strong>Current CTC:</strong> {staticUserData.currentCTC}
            </div>
            <div>
              <strong>Interested Domain:</strong> {staticUserData.interestedDomain}
            </div>
          </>
        )}
      </div>

      {isEditing ? (
        <div className="admin-actions">
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit Profile</button>
      )}
    </div>
  );
};

export default AdminDashboard;

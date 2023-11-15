import React from "react";
import "./About.css";
import res from "../Assets/resume.jpg";
import { useNavigate } from 'react-router-dom'; 
import { selectUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
const About = () => {
  const navigate = useNavigate(); 
  const user = useSelector(selectUser);
  const loggedIn = user.loggedIn;
  const handleDesignNowClick = () => {
    if (loggedIn) {
      navigate('/ResumeMaker');
    } else {
      alert('Login to use this function');
    }
  };

  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Don't have a resume?</h1>
        <p className="primary-text">
          Elevate Your Career with Our Exquisite Resume Templates. Our Artistry Meets Functionality, Creating Resumes That Stand Out. Empower Yourself to Showcase Your Best.
        </p>
        <p className="primary-text">Start with the Perfect Resume Today!</p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleDesignNowClick}>
            Design now?
          </button>
        </div>
      </div>
      <div className="home-image-section">
        <img src={res} alt="" />
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import './Description.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Description() {
  const user = useSelector(selectUser);
  const loggedIn = user.loggedIn;
  const navigate = useNavigate();

  const handleLearnMoreClick = (section) => {
    if (!loggedIn) {
      alert('Login to use this function');
    } else {
      // You can navigate to the respective section if the user is logged in.
      // Example: navigate(`/ResumeMaker`) for the ResumeMaker section.
      if (section === 'ResumeMaker') {
        navigate('/ResumeMaker');
      } else if (section === 'SearchJobPage') {
        navigate('/SearchJobPage');
      } else if (section === 'Home') {
        navigate('/Home');
      }
    }
  };

 

  return (
    <div>
      <div className="container">
        <h1>JobSymphony</h1>
        <p>
          JobSymphony is your ultimate career companion, dedicated to orchestrating your path to professional success. We provide a comprehensive job-searching platform where job seekers can explore a vast array of opportunities tailored to their skills and preferences.
        </p>

        <button className='smooth-scroll' onClick={() => handleLearnMoreClick('ResumeMaker')}>
          Learn more
        </button>
      </div>

      <section id='scroll'>
        <div className="container second">
          <div className="item">
            <div className="img img-first"></div>
            <div className="card">
              <h3>Don't have a resume?</h3>
              <p className='para'>
                Elevate Your Career with Our Exquisite Resume Templates. Our Artistry Meets Functionality, Creating Resumes That Stand Out. Empower Yourself to Showcase Your Best.
              </p>
              <button className='is' onClick={() => handleLearnMoreClick('ResumeMaker')}>
                Learn more
              </button>
            </div>
          </div>
          <div className="item">
            <div className="img img-second"></div>
            <div className="card">
              <h3>Harmonizing Careers</h3>
              <p className='para'>
                We believe in the symphony of careers. Just like a well-orchestrated masterpiece, your professional journey should be a harmonious blend of passion, purpose, and fulfillment. Our mission is to help you find the perfect balance, where your talents resonate with your ambitions.
              </p>
              <button className='is' onClick={() => handleLearnMoreClick('SearchJobPage')}>
                Learn more
              </button>
            </div>
          </div>
          <div className="item">
            <div className="img img-third"></div>
            <div className="card">
              <h3>Navigating Dreams</h3>
              <p className='para'>
                Our app transforms your aspirations into reality. Seamlessly explore job opportunities, connect with mentors, and build your path to success. Your journey begins here.
              </p>
              <button className='is' onClick={() => handleLearnMoreClick('Home')}>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
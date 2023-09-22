import React from 'react';
import './Home.css';
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'; 
import Footer from '../Footer/Footer';
import About from '../About/About';
import tr from '../Assets/transparent.png';
import ButtonAppBar from '../NavBar/NavBar';
import Testimonial from '../Testimonial/Testimonial';

export default function Home() {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    
    navigate('/search');
  };

  return (
    <div className="centered-text1">
      <ButtonAppBar />
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">
              Harmonizing careers!
            </h1>
            <p className="primary-text">
              Compose your epic symphony of success through creativity. Join us to unlock your full potential and harmonize your career journey. Discover the path to greatness with our supportive community. Together, let's make your career resonate with creativity, passion, and achievement. Join now and start your creative journey
            </p>
            <button className="secondary-button" onClick={handleExploreClick}>
              Explore <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={tr} alt="" />
          </div>
        </div>
        <About />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

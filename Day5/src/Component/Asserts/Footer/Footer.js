import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <Link to="/Description" className="footer-section-columns">
        <span>About</span>
        </Link>
        <Link to="/Search" className="footer-section-columns">
        <span>Careers</span>
        </Link>

          <Link to="/faqs" className="footer-section-columns">
          <span>FAQs</span>
          </Link>
          <Link to="/Works" className="footer-section-columns">
          <span>Work</span>
          </Link>
        </div>
        <div className="footer-section-columns">
          <span>9489184358</span>
          <span>hello@jobSymphony.com</span>
          <span>press@jobSymphony.com</span>
          <span>contact@jobSymphony.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          </div>
          </div>
          </div>
  );
};

export default Footer;
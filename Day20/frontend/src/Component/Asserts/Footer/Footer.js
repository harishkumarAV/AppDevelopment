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
          <a href="https://twitter.com">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com">
            <SiLinkedin />
          </a>
          <a href="https://youtube.com">
            <BsYoutube />
          </a>
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <Link to="/home" className="footer-section-columns">
        <span>Home</span>
        </Link>
        <Link to="/Description" className="footer-section-columns">
          <span>About</span>
        </Link>
          <Link to="/faqs" className="footer-section-columns">
            <span>FAQs</span>
          </Link>
        </div>
        <div className="footer-section-columns">
          <span>+91 9489184358</span>
          <span>Hello@jobSymphony.com</span>
        </div>
        <div className="footer-section-columns">
          <Link to="/TermsandConditions" className="footer-section-columns">
            <span>Terms & Conditions</span>
          </Link>
          <Link to="/Privacy" className="footer-section-columns">
            <span>Privacy Policy</span>
          </Link>
        </div>
      </div>

      <div className="footer-copyright">
        <span>&copy; Copyright 2023 JobSymphony</span>
      </div>
    </div>
  );
};

export default Footer;

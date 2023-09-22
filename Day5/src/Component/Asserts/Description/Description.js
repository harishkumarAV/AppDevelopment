import React from 'react';
import './Description.css';
import des from '../Assets/des.jpg'
export default function Description() {
  return (
    <div className="frame">
    <div className="div">
      <div className="text-wrapper">Empowering Dreams</div>
      <p className="p">
        where career aspirations take flight. Our mission is simple: to empower individuals like you to achieve their
        professional dreams. We provide innovative tools, personalized guidance, and a supportive community to help
        you navigate the path to success.
      </p>
      <div className="text-wrapper-2">Harmonizing Careers</div>
      <p className="we-believe-in-the">
        {" "}
        we believe in the symphony of careers. Just like a well-orchestrated masterpiece, your professional journey
        should be a harmonious blend of passion, purpose, and fulfillment. Our mission is to help you find the perfect
        balance, where your talents resonate with your ambitions.
      </p>
      <div className="text-wrapper-3">Navigating Dreams</div>
      <p className="where-we-embark-on-a">
        where we embark on a journey to turn dreams into reality. Our compass is ambition, and our map is your
        potential. With a passion for guiding individuals toward their professional goals, we&#39;re committed to
        charting a course that leads to success.
      </p>
      <img className="element" alt="Element" src={des} />
    </div>
  </div>
  )
}

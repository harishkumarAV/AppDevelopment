import React from 'react'
import './Description.css';
export default function Description() {
  return (
    <div><div class="container">
    <h1>JobSymphony</h1>
    <p>JobSymphony is your ultimate career companion, dedicated to orchestrating your path to professional success. We provide a comprehensive job-searching platform where job seekers can explore a vast array of opportunities tailored to their skills and preferences.</p>
    
    <a className='smooth-scroll' href="#scroll" >Learn more</a>
  </div>
  
  
  <section id='scroll'>
  
  <div class="container second">
  <div class="item">
  <div class="img img-first"></div>
  <div class="card">
  <h3>Don't have a resume?</h3>
  <p className='para'> Elevate Your Career with Our Exquisite Resume Templates. Our Artistry Meets Functionality, Creating Resumes That Stand Out. Empower Yourself to Showcase Your Best.</p>
  <a className='is' href="/ResumeMaker">Learn more</a>
  </div>
  </div>
  <div class="item">
  <div class="img img-second"></div>
  <div class="card">
  <h3>Harmonizing Careers</h3>
  <p className='para'> we believe in the symphony of careers. Just like a well-orchestrated masterpiece, your professional journey
  should be a harmonious blend of passion, purpose, and fulfillment. Our mission is to help you find the perfect
  balance, where your talents resonate with your ambitions.    </p>
  <a className='is' href="/SearchJobPage">Learn more</a>
  </div>
  </div>
  <div class="item">
  <div class="img img-third"></div>
  <div class="card">
  <h3>Navigating Dreams</h3>
  <p className='para'>Our app transforms your aspirations into reality. Seamlessly explore job opportunities, connect with mentors, and build your path to success. Your journey begins here.</p>
  <a className='is' href="/Home">Learn more</a>
  </div>
  </div>
  </div>
  
  </section>
  </div>
  )
}

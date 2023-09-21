import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Sip into Happiness at Crema.Discover what our cherished customers have to say about their delightful coffee experiences.
         From enchanting espresso shots to creamy lattes and mouthwatering beverages, our cafe has become a haven for coffee enthusiasts 
         seeking pure bliss in every cup. Not only do we serve the finest coffees, but we also bring the cafe experience to your 
         doorstep with our seamless home delivery service. Read their heartwarming testimonials and join the chorus of satisfied smiles.
          Your journey to coffee perfection starts here! Share your own coffee tale with us, and let the love for our beverages flow, one 
          sip at a time.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        The combination of great coffee, attentive service, and the added convenience of home delivery make
         this cafe a winner in my book. I'll definitely be back for more coffee adventures.
          Cheers to this coffee haven! 
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Harish</h2>
      </div>
    </div>
  );
};

export default Testimonial;
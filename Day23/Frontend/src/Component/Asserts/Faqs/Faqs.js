import React from 'react';
import './Faqs.css'; 

export default function Faqs() {
  const faqData = [
    {
      question: 'What is Our App?',
      answer: 'Our app is a platform designed to help individuals find their dream jobs...'
    },
    {
      question: ' How can I create an account?',
      answer: ' To create an account, click on the "Sign Up" button...'
    },
    {
      question: ' Can I update my profile information?',
      answer: ' Yes, you can update your profile information at any time...'
    },
    {
      question: 'How do I create an account on the job portal app?',
      answer: 'To create an account, click on the "Sign Up" or "Register" button on the apps homepage. Fill in your details, such as name, email, and password. You may also have the option to sign up using your social media accounts.'
    },
    {
      question: 'How do I search for job listings on the app?',
      answer: 'After logging in, go to the search or job listings section. Enter keywords, location, or other filters to narrow down your search. You can also browse by category or industry.'
    },
    {
      question: 'Is my personal information safe on the app?',
      answer: 'Job portal apps take data privacy seriously. They often use encryption and security measures to protect your personal information. Read the apps privacy policy to understand how your data is handled.'
    },
    {
        question:'How can I contact the support team for assistance or inquiries?',
        answer:'You can typically find a "Contact Us" or "Support" section within the app. Use this to reach out to the apps customer support team for any questions or issues you may have.'
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

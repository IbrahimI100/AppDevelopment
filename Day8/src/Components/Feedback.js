// Feedback.js

import React, { useState } from 'react';
import './Feedback.css';
import Header from '../Components/NavBar'; // Import your header component
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import feedback1 from '../Assets/Image/feedback.jpg';
function Feedback() {
  const [feedback, setFeedback] = useState('');
const navigate=useNavigate();

 
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      alert('Feel free to write');
    } else {
      console.log('feedback stored');
      navigate('/navbar');
    }
  };
  
  return (
    <div className="feedback-container">
      <Header /> {/* Include your header component here */}
     
      <div className="header-image1">
      <img src={feedback1} alt="FCb" />
    </div>
      <h1 className="feedback-title">Share Your Feedback</h1>
      <p className="feedback-description">
        Your opinion matters to us. Please provide your valuable feedback below.
      </p>
      <textarea
        className="feedback-textarea"
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange}
      ></textarea>
      <button className="feedback-submit-button" onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
}

export default Feedback;

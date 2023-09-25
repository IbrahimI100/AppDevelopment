// Terms.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Terms.css';
import feedback1 from '../Assets/Image/feedback.jpg';

const Terms = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Navigate back to the signup page
  };

  return (
  <div className='hel'>
  <div className="header-image8">
    <img src={feedback1} alt="FCb" />
    </div>
    <div className="terms-conditions">
      <h1>Terms & Conditions</h1>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using Feedly, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, please do not use the Site.</p>

      <h2>2. Use of the Site</h2>
      <p>You agree to use the Site for lawful purposes and in a manner consistent with all applicable laws and regulations.</p>

      <h2>3. Intellectual Property</h2>
      <p>The content on the Site, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws. You may not copy, reproduce, or distribute any content from the Site without our permission.</p>

      <h2>4. Privacy</h2>
      <p>Your use of the Site is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>

      <h2>5. Changes to Terms</h2>
      <p>We reserve the right to change these Terms & Conditions at any time. Updated Terms will be posted on the Site, and your continued use of the Site after any changes indicate your acceptance of the new Terms.</p>

      {/* Button to navigate back to signup page */}
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back to Signup
      </button>
    </div>
    </div>
  );
};

export default Terms;

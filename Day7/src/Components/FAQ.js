// FAQ.js

import React from 'react';
import './FAQ.css'; // Import your FAQ page's CSS
import Header from '../Components/NavBar'; // Import your header component
 // Import Link from react-router-dom
 import faq from '../Assets/Image/faq.jpg';
function FAQ() {
  return (
    <div className="faq-container">
      <Header /> {/* Include the Header component (navbar) */}
      <div className="header-image2">
      <img src={faq} alt="FCb" />
    </div>
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-section">
        <h2 className="faq-question">1. What is MyVote?</h2>
        <p className="faq-answer">
          MyVote is a platform that allows football fans to cast their votes, show support for their favorite teams, and engage with fellow fans in a fun and fair voting experience.
        </p>
      </div>

      <div className="faq-section">
        <h2 className="faq-question">2. How can I vote for my favorite team?</h2>
        <p className="faq-answer">
          To vote for your favorite team, simply click on the "Vote" button next to the team's logo on the dashboard page.
        </p>
      </div>

      <div className="faq-section">
        <h2 className="faq-question">3. Can I change my vote after casting it?</h2>
        <p className="faq-answer">
          No, once you've cast your vote, it cannot be changed. Please vote carefully.
        </p>
      </div>

      <div className="faq-section">
        <h2 className="faq-question">4. How are the voting results calculated?</h2>
        <p className="faq-answer">
          Voting results are calculated based on the total number of votes cast for each team. The team with the most votes wins.
        </p>
      </div>

      <div className="faq-section">
        <h2 className="faq-question">5. Is my personal information safe on MyVote?</h2>
        <p className="faq-answer">
          Yes, we take your privacy seriously. Your personal information is securely stored and will not be shared with third parties.
        </p>
      </div>
      <div className="faq-section">
            <h2 className="faq-question">6. How do I create an account on MyVote?</h2>
            <p className="faq-answer">
            
            To create an account on MyVote, click on the "Sign Up" or "Register" button on the dashboard page. Follow the prompts to enter your details and create an account.
            </p>
          </div>
          <div className="faq-section">
            <h2 className="faq-question">7. I forgot my password. How can I reset it?</h2>
            <p className="faq-answer">
            If you forget your password, you can click on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email to reset your password.
            </p>
          </div><div className="faq-section">
            <h2 className="faq-question">8. Can I vote for more than one team?</h2>
            <p className="faq-answer">
            No, you can only vote for one team in each voting event. However, you can participate in multiple voting events if they are available.
            </p>
          </div>
    </div>
  );
}

export default FAQ;

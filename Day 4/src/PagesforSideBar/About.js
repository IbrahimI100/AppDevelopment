import React from 'react';
import './About.css';

function About() {
  return (
    
    <div className="custom-aboutus-container">
      <div className="background-image"></div>
      <div className="content">
        <div className="section">
          <h1>About Us</h1>
          <div className="p1">
            <p>
            Welcome to MyVote! Our mission is to bring football fans together and celebrate the passion for the game. On this platform, you can cast your vote, show your support for your favorite teams, and engage with fellow fans. We're dedicated to providing a fun and fair voting experience. Learn more about our team and the story behind MyVote. Thank you for being part of the excitement!
            </p>
          </div>
        </div>
        <div className="section">
          <h3>Our Mission</h3>
          <div className="p2">
            <p>
              Our mission is to revolutionize the way people engage in the democratic process by providing a user-friendly, secure, and efficient platform for online voting. We believe that technology can bridge the gap between citizens and their governments, making it easier for individuals to exercise their right to vote and contribute to the decisions that shape their communities and nations.
            </p>
          </div>
        </div>
        <div className="section">
          <h3>Contact Us</h3>
          <div className="p3">
            <p>
              Have questions or feedback? We'd love to hear from you. Contact our friendly support team at <a href="mailto:voteease@gmail.com">voteease@gmail.com</a> or <a href="tel:+919090909090">+91 9090909090</a>.
            </p>
            <p>
              Join us at VoteEase and be part of the next generation of online voting. Together, we can make democracy more accessible, secure, and convenient for everyone. Your voice matters, and we're here to amplify it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

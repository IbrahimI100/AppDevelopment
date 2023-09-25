import React from 'react';
import './About.css';
import Header from '../Components/NavBar';
import picforabout1 from '../Assets/Image/picforabout1.jpg';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className="about-page">
      <Header /> {/* Include the Header component (navbar) */}
      <div className="header-image">
      <img src={picforabout1} alt="FC" />
    </div>

      <div className="about-content">
        <section className="about-section">
          <h1 className="about-title">About Us</h1>
          <div className="about-paragraph">
            <p className="about-text">
              Welcome to MyVote! Our mission is to bring football fans together and celebrate the passion for the game. On this platform, you can cast your vote, show your support for your favorite teams, and engage with fellow fans. We're dedicated to providing a fun and fair voting experience. Learn more about our team and the story behind MyVote. Thank you for being part of the excitement!
            </p>
          </div>
        </section>
        <section className="about-section">
          <h3 className="about-subtitle">Our Mission</h3>
          <div className="about-paragraph">
            <p className="about-text">
              Our mission is to revolutionize the way people engage in the democratic process by providing a user-friendly, secure, and efficient platform for online voting. We believe that technology can bridge the gap between citizens and their governments, making it easier for individuals to exercise their right to vote and contribute to the decisions that shape their communities and nations.
            </p>
          </div>
        </section>
        <section className="about-section">
          <h3 className="about-subtitle">Contact Us</h3>
          <div className="about-paragraph">
            <p className="about-text">
              Have questions or feedback? We'd love to hear from you. Contact our friendly support team at <Link to={"mailtoibrahim007@gmail.com"}  className="about-link">mailtoibrahim007@gmail.com</Link> or <Link to={"80"}  className="about-link">+91 8056824328</Link>.
            </p>
            <p className="about-text">
              Join us and be part of the next generation of online voting. Together, we can make democracy more accessible, secure, and convenient for everyone. Your voice matters, and we're here to amplify it.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

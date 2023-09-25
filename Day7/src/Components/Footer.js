import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { ImFacebook2 } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Main Street<br />City, State<br />Postal Code</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <div className="socialMediaLink">
              <GitHubIcon size={24} />
              <Link to="https://github.com/IbrahimI100" target="_blank">GitHub</Link>
            </div>
            <div className="socialMediaLink">
              <ImInstagram size={24} />
              <Link to="https://www.instagram.com/__ibrah__im__" target="_blank">Instagram</Link> 
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: mailtoibrahim007@gmail.com<br />Phone: 8056824328</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

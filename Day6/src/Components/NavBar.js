// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBar.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo"><strong>Feedly</strong></h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link> {/* Use Link component */}
          </li>
          <li className="nav-item">
            <Link to="/navbar" className="nav-link">Home</Link> {/* Use Link component */}
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link">FAQ</Link> {/* Use Link component */}
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Logout</Link> {/* Use Link component */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

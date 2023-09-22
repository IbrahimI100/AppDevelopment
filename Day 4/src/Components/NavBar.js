import React from 'react';
import './NavBar.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo"><strong>My Vote</strong></h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/parties" className="nav-link">Teams</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

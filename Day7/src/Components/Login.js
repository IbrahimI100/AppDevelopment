// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import loginImage from '../Assets/Image/loginpic.jpg'; // Import the local image

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const authenticate = (e) => {
    e.preventDefault();

    if (username && password) {
      // Check if the password length is greater than or equal to 8 characters
      if (password.length >= 8) {
        // Add your authentication logic here.
        // For demonstration purposes, let's assume authentication is successful.
        const isAuthenticated = true;
  
        if (isAuthenticated) {
          // Navigate to the desired route (replace '/navbar' with your route).
          navigate('/navbar');
        }
      } else {
        alert('Password must be at least 8 characters long.');
      }
    } else {
      // Display an error message or take appropriate action if fields are not filled in.
      alert('Please fill in both username and password.');
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        {/* Left side image */}
        <img className="image login-image" src={loginImage} alt="Login Page Logo" />

      </div>

      <div className="content-container">
        <div className="content2">
          <img className="image feedly-logo" src="https://s1.feedly.com/images/fx/logos/logo-feedly-full-color@2x.png" alt="Feedly Logo" />

          <h1 className="content-header">Login</h1>
          <div className="form-container">
            <form>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                name="username"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
                required
              />
              <button className="login-button" type="submit" onClick={authenticate}>
                Login
              </button>
            </form>
          </div>
          <p className="create-account-text">
            Don't have an account? <Link to="/" className="sign-up-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

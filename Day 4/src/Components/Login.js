import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const authenticate = (e) => {
    e.preventDefault();

    // Check if both username and password fields are filled in
    if (username && password) {
      // Add your authentication logic here.
      // For demonstration purposes, let's assume authentication is successful.
      const isAuthenticated = true;

      if (isAuthenticated) {
        // Navigate to the desired route (replace '/dashboard' with your route).
        navigate('/navbar');
      }
    } else {
      // Display an error message or take appropriate action if fields are not filled in.
      alert('Please fill in both username and password.');
    }
  };

  return (
    <div className="login-container1">
      <h1>Login</h1>
      <div className="form-container-login">
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
          <button className="but" type="submit" onClick={authenticate}>
            Login
          </button>
        </form>
      </div>
      <p className="signup-link">
        Don't have an account? <Link to="/" className="sign">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;

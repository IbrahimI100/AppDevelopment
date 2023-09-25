import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age < 18) {
      alert('You must be at least 18 years old to cast your vote');
    } else if (password.length >= 8) {
      console.log(email);
      navigate('/navbar');
    } else {
      alert('Password must be at least 8 characters long.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image-container">
        {/* Left side images */}
        <img
          className="image feedly-logo"
          src="https://s1.feedly.com/images/fx/logos/logo-feedly-full-color@2x.png"
          alt="Feedly Logo"
        />
        <img
          className="image leo-waving"
          src="https://s1.feedly.com/images/leo-waving.png"
          alt="Leo Waving"
        />
      </div>

      <div className="signup-content-container">
        <div className="signup-content">
          <h1 className="content-header">Create an account</h1>
          <div className="authList">
            <form onSubmit={handleSubmit}>
              <div className="inputbox">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  name="username"
                  required
                />
              </div>
              <div className="inputbox">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  name="email"
                  required
                />
              </div>
              <div className="inputbox">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                  name="age"
                  required
                />
              </div>
              <div className="inputbox passwordbox">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <input type="hidden" name="csrfToken" value="efc44M:1695488658592" />
              <input type="submit" className="get-started-button" value="Get started" />
            </form>
            <div className="create-account-text">
              Already have an account? <Link to="/login" className="log-in-link">Log in</Link>.
            </div>
            <div className="terms text-secondary">
              By clicking, you agree to Feedly's{' '}
              <Link to="/terms">Terms of Service</Link> and acknowledge you have read the{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

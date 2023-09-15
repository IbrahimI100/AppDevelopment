import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
      return (
    <div className="login-container">
    
        <h1>Create an Account</h1>
        <div className='form-container-signup'>
        <form onSubmit={handleSubmit}>
        
            <input type="text" value={name} 
            onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
                 <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
         <input type="password" value={password}onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>

          <button type='Submit'> SignUp</button>
        </form>
        </div>
        <p className="signup-link">
          Already have an account? <Link to="/Login" className='sign'>Sign in</Link>
        </p>
       
      </div>

  );
}

export default SignUp;
import React, {  useState } from 'react';
import { Link} from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState(''); 
  
  return (
    <div className="login-container1">
  
    <h1>Login</h1>
        <div className='form-container-login'>
        <form>
       
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
            />
            <button type='Submit'>Login</button>
            </form>
            </div>
            <p className="signup-link"> 
              Don't have an account? <Link to="/" className='sign'>Sign Up</Link>
            </p>
      </div>
    
  );
}

export default Login;

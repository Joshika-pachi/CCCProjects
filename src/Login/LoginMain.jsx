import React, { useState } from 'react';
import loginImage from './login-image.jpg';  
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LoginMain() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#f0f0f0',
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    width: '800px',
    height: '600px',
    padding: '20px',
    border: '5px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  };

  const imageStyle = {
    flex: 1,
    backgroundImage: `url(${loginImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
  };

  const formStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const iconButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('signupUser'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className='login-main' style={containerStyle}>
      <div style={boxStyle}>
        <div style={imageStyle} />
        <form style={formStyle} onSubmit={handleLogin}>
          <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
          <hr />

          <label htmlFor="email"><b>Email:</b></label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{padding: '8px',}}
          />

          <label htmlFor="password"><b>Password:</b></label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{padding: '8px',}}
          />

          {message && (
            <p style={{ color: message.includes('success') ? 'green' : 'red', textAlign: 'center' }}>
              {message}
            </p>
          )}

          <button type="submit" style={buttonStyle}>Login</button>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', color: 'blue' }}>
            <a href="#">Forgot Password?</a>
            <Link to="/signup">Signup</Link>
          </div>

          <hr />
          <h4 style={{ textAlign: 'center' }}>Or Login With:</h4>
          <div style={iconContainerStyle}>
            <div style={iconButtonStyle} title="Login with Google">
              <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">
              <FcGoogle size={23} /></a>
            </div>
           
            <div style={iconButtonStyle} title="Login with GitHub">
               <a href="https://github.com/Joshika-pachi" target="_blank" rel="noopener noreferrer">
              <FaGithub size={23} /></a>
            </div>
            <div style={iconButtonStyle} title="Login with LinkedIn">
              <a href="https://www.linkedin.com/in/joshika-pachi-0b1b2a1b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={23} color="#0A66C2" /></a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginMain;

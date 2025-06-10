import React, { useState } from 'react';
import signupimage from './signup-image.jpg';  
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function SignupMain() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    height: '700px',
    padding: '20px',
    border: '5px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  };

  const imageStyle = {
    flex: 1,
    backgroundImage: `url(${signupimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    transform: 'scale(0.7)',
    overflow: 'hidden',
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
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  };

  const validatePassword = (pass) => {
    const lengthValid = pass.length >= 3 && pass.length <= 9;
    const hasCapital = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

    return lengthValid && hasCapital && hasNumber && hasSpecialChar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be 3-9 characters and include a capital letter, number, and special character');
      return;
    }

    // Save to localStorage
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    setError('');
    alert('Signup successful!');
    navigate('/*'); // Redirect to login page
  };

  return (
    <div className='login-main' style={containerStyle}>
      <div style={boxStyle}>
        <div style={imageStyle} />
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center' }}>SIGNUP</h2>
          <hr />

          <label htmlFor="name"><b>Name:</b></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required style={{padding: '8px',}}
          />

          <label htmlFor="email"><b>Email:</b></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required style={{padding: '8px',}}
          />

          <label htmlFor="password"><b>Password:</b></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required style={{padding: '8px',boxShadow:'{2}'}}
          />

          <label htmlFor="confirm-password"><b>Confirm Password:</b></label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required style={{padding: '8px',}}
          />

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <button style={buttonStyle} type="submit">SignUp</button>

          <p>Already have an account? <Link to="/login">Log In</Link></p>

          <h4 style={{ textAlign: 'center' }}>Or SignUp With:</h4>
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

export default SignupMain;

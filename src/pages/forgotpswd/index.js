import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../login/login.css'; // Assuming styles are in the same folder
import logo from '../../assets/images/logo.png'; // Update path to your logo if needed

const Forgotpwd = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    navigate("/xcelerando/login");

  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form-container">
          <div className='before-form-login'>
            <Link to="/xcelerando/login" className="back-to-website">← Back to login</Link>
            <img src={logo} className="forgot_logo" alt="Logo" />
            <h2 className='log-h2'>Forgot Password</h2>
            <p className='forgot_para'>Please enter your e-mail address so we will send you a reset link</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn-primary">Forgot</button>
          </form>
        </div>
      </div>
      <div className="image-container"></div>
    </div >
  );
};

export default Forgotpwd;

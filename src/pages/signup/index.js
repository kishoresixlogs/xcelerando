import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../login/login.css'; // Assuming styles are in the same folder
import logo from '../../assets/images/logo.png'; // Update path to your logo if needed
import apple from '../../assets/images/apple.svg'; // Update path to your logo if needed
import facebook from '../../assets/images/facebook.svg'; // Update path to your logo if needed
import google from '../../assets/images/google.svg'; // Update path to your logo if needed
import linkedin from '../../assets/images/linkedin.svg'; // Update path to your logo if needed

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setisSecureEntry] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    navigate("/xcelerando/login");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form-container">
          <div className='before-form-login'>
            <Link to="/xcelerando/login" className="back-to-website">← Back to login</Link>
            <img src={logo} className="logo" alt="Logo" />
            <h2 className='log-h2'>Sign Up</h2>
            <p>Enter your detail for sign in</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Full name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Full name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
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

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={isSecureEntry ? 'password' : 'text'}
                id="password"
                name="password"
                placeholder="Your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={() => setisSecureEntry(!isSecureEntry)}>
                <i className={`fas ${isSecureEntry ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>
            <Link to="/xcelerando/forgotpassword" className="forgot-password">Forgot your password?</Link>

            <button type="submit" className="btn-primary">Sign in</button>
          </form>

          <div className="divider">Or sign in with <span style={{color: "#496DAB", fontWeight: "bold"}}>CODE</span></div>

          <div className="social-login">
            <Link to="#" className="social-btn"><img src={facebook} alt="Facebook" />
            </Link>
            <Link to="#" className="social-btn"><img src={apple} alt="Apple" />
            </Link>
            <Link to="#" className="social-btn"><img src={google} alt="Google" />
            </Link>
            <Link to="#" className="social-btn"><img src={linkedin} alt="LinkedIn" />
            </Link>
          </div>

          <div className="sign-up-link">
            Already have an account? <Link to="/xcelerando/login">Sign in</Link>
          </div>
        </div>
      </div>
      <div className="image-container"></div>
    </div >
  );
};

export default Signup;

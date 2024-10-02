import React from 'react';
import { useNavigate } from "react-router-dom";
import '../login/login.css'; // Assuming styles are in the same folder
import logo from '../../assets/images/logo.png'; // Update path to your logo if needed

const Prelogin = () => {
  const navigate = useNavigate(); // Hook from React Router


  const handleRoleSelect = (role) => {
    // You can navigate or store the selected role
    console.log("Selected role:", role);
    // Navigate to the next page or set the role in state
    navigate("/xcelerando/login", { state: { role: role } });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form-container">
          <div className='before-form-login'>
            {/* <Link to="/xcelerando/login" className="back-to-website">← Back to login</Link> */}
            <img src={logo} className="forgot_logo" alt="Logo" />
            <h2 className='log-h2'>Role</h2>
            <p className='forgot_para'>Select your role</p>
          </div>
          <div className="role-selection">
            <button className="role-btn" onClick={() => handleRoleSelect('Admin')}>Admin</button>
            <button className="role-btn" onClick={() => handleRoleSelect('Teacher')}>Teacher</button>
            <button className="role-btn" onClick={() => handleRoleSelect('Student')}>Student</button>
          </div>
        </div>
      </div>
      <div className="image-container"></div>
    </div >
  );
};

export default Prelogin;

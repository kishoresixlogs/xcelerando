import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../store/featureActions";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [isSecureEntry, setisSecureEntry] = useState(true);
  const [isSecureEntry2, setisSecureEntry2] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const passwordPatern = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+/;
  let userId = location?.state?.userId;
  let isValid = passwordPatern.test(newPassword) && confirmNewPassword == newPassword;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(true);
    if (isValid) {
      try {
        let payload = {
          body: { newPassword, confirmNewPassword, id: userId },
          params: false,
          isToast: true,
        };
        await dispatch(resetPassword(payload)).unwrap();
        navigate("/xcelerando/login");
      } catch (rejectedValueOrSerializedError) {
        console.log(rejectedValueOrSerializedError);
      }
    }
  };
  return (
    <section className="initial-sec">
      <div className="initial-row">
        <div className="leftCol">
          <Link to={"/xcelerando/prelogin"}>
            <img src="/assets/images/logo-2.png" alt="" />
          </Link>
        </div>
        <div className="rightCol p-3">
          <form className="loginForm loginForm_2" onSubmit={handleSubmit}>
            <h1 className="loginHeading">Reset Password</h1>
            <p className="loginDesc mb-3">Set your New Password</p>
            <div>
              <div className="form-group logInput mb-3">
                <input type={`${isSecureEntry ? "password" : "text"}`} placeholder="New Password" onChange={(e) => setNewPassword(e?.target?.value)} />
                <span className="absIcon">
                  <img src="/assets/images/password.png" alt="img" className="w-100" />
                </span>
                <span
                  className="absIcon_2"
                  onClick={() => {
                    setisSecureEntry((prev) => !prev);
                  }}
                >
                  <i className={`fas fa-solid ${!isSecureEntry ? "fa-eye-slash" : "fa-eye"}`} style={{ color: "gray", fontSize: 18 }}></i>
                </span>
              </div>
              {error && !newPassword && <div className="error-message">New password field can't be empty.</div>}
              {error && newPassword && !passwordPatern.test(newPassword) && <div className="error-message">Password should be 8 characters long (should contain uppercase, lowercase, numeric and special character).</div>}
            </div>
            <div>
              <div className="form-group logInput mb-3">
                <input type={`${isSecureEntry2 ? "password" : "text"}`} placeholder="Confirm New Password" onChange={(e) => setConfirmNewPassword(e?.target?.value)} />
                <span className="absIcon">
                  <img src="/assets/images/password.png" alt="img" className="w-100" />
                </span>
                <span
                  className="absIcon_2"
                  onClick={() => {
                    setisSecureEntry2((prev) => !prev);
                  }}
                >
                  <i className={`fas fa-solid ${!isSecureEntry2 ? "fa-eye-slash" : "fa-eye"}`} style={{ color: "gray", fontSize: 18 }}></i>
                </span>
              </div>
              {error && !confirmNewPassword && <div className="error-message">Confirm new password field can't be empty.</div>}
              {error && confirmNewPassword && newPassword !== confirmNewPassword && <div className="error-message">New password and Confirm new password must be same.</div>}
            </div>
            <div className="form-group">
              <button type="submit" className="cta mb-4">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ResetPassword;

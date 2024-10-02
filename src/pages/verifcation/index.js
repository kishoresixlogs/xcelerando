import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resendOTP, verifyOTP } from "../../store/featureActions";
import OtpInput from "react-otp-input";
import { getProfile } from "../../store/slices/userSlice";
import Counter from "../../components/counter";

const Verification = () => {
  const [timerValue, setTimerValue] = useState(30);
  const [timerKey, setTimerKey] = useState(true);
  const [otp, setOtp] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  let userId = location?.state?.userId;
  const dispatch = useDispatch();
  const handleChange = async (otp) => setOtp(otp);
  const profile = useSelector(getProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        body: { otp, id: userId },
        params: false,
        isToast: true,
      };
      const response = await dispatch(verifyOTP(payload)).unwrap();
      if (response?.data?.data?.isForget === 1) {
        navigate("/xcelerando/resetpassword", { state: { userId: response?.data?.data?._id } });
      } else {
        navigate("/xcelerando/basicprofile", { state: { userId: response?.data?.data?._id } });
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        body: { id: userId },
        params: false,
        isToast: true,
      };
      await dispatch(resendOTP(payload)).unwrap();
      setTimerValue(30);
      setOtp();
      setTimerKey((e) => !e);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  useEffect(() => {
    if (profile?.isVerified == 1) {
      navigate("/xcelerando/prelogin");
      return () => { };
    }
  }, []);
  return (
    <section className="initial-sec">
      <div className="initial-row">
        <div className="leftCol">
          <Link to={"/xcelerando/prelogin"} >
            <img src="/assets/images/logo-2.png" alt="" />
          </Link>
        </div>
        <div className="rightCol p-3 relclassName">
          <form className="loginForm" onSubmit={handleSubmit}>
            <h1 className="loginHeading pb-2">OTP Verification</h1>
            <p className="loginDesc mb-3">We have sent you an email containing 6 Digits verification code. Please enter the code to verify your identity.</p>
            <div method="get" className="digit-group pb-3" data-group-name="digits" data-autosubmit="false" autocomplete="off">
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span style={{ width: "8px" }}> - </span>}
                isInputNum={true}
                inputType="number"
                shouldAutoFocus={true}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  border: "1px solid #CFD3DB",
                  borderRadius: "8px",
                  width: "54px",
                  height: "54px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "400",
                  margin: "10px",
                  caretColor: "blue",
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                }}
              />
            </div>
            <div className="form-group">
              <div className="form-group">
                <button type="submit" className="cta mb-4">
                  Verify
                </button>
              </div>
            </div>
            <div className="item">
              <Counter setTimerKey={setTimerKey} timerKey={timerKey} setTimerValue={setTimerValue} timerValue={timerValue} />
            </div>
            <p className="resendBtn">
              Code didn't receive?
              <button className="cta_link" style={{ color: timerValue === 0 ? "black" : "gray" }} disabled={timerValue === 0 ? false : true} onClick={(e) => handleResendOTP(e)}>
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Verification;

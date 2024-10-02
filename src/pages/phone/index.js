import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";
import { auth } from "../../config/firebase.js";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import Spinner from "../../components/spinner";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { socialLogin } from "../../store/featureActions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getDeviceToken } from "../../store/slices/userSlice";
const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (number) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(number));
  } catch (error) {
    return false;
  }
};
const Phone = () => {
  const deviceToken = useSelector(getDeviceToken)
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState();
  const [showVerification, setShowVerification] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValid = isPhoneValid(number);

  const handleChange = async (otp) => setOtp(otp);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            handleSubmit();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(true);
    if (isValid) {
      onCaptchVerify();
      const appVerifier = window.recaptchaVerifier;
      setLoading(true);
      signInWithPhoneNumber(auth, number, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setShowVerification(true);
          setLoading(false);
          toast.success("OTP verification code has been sent to your phone.");
        })
        .catch((error) => {
          console.log("eeee", error.message);
          setLoading(false);
          toast.error("Something went wrong");
        });
    }
  }

  function onOTPVerify(e) {
    e.preventDefault();
    if (!otp) {
      toast.error("OTP field can't be empty");
    } else {
      setLoading(true);
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          console.log(res);
          socialUserLogin(e, res);
          setLoading(false);
        })
        .catch((err) => {
          if (err.code == "auth/invalid-verification-code") {
            toast.error("Invalid verification code");
          }
          setLoading(false);
          console.log(err);
        });
    }
  }

  const socialUserLogin = async (e, data) => {
    e.preventDefault();
    try {
      let payload = {
        body: { phone: data?.user?.phoneNumber, socialToken: data?.user?.uid, socialType: data?.providerId, deviceType: "web", deviceToken },
        params: false,
        isToast: true,
      };
      const response = await dispatch(socialLogin(payload)).unwrap();
      if (response?.data?.data?.isProfileCompleted === 0) {
        navigate("/xcelerando/basicprofile", { state: { userId: response?.data?.data?._id } });
      } else {
        navigate("/");
      }
    } catch (rejectedValueOrSerializedError) {
      if (rejectedValueOrSerializedError?.data?.data?.isProfileCompleted == 0) {
        navigate("/xcelerando/basicprofile", { state: { userId: rejectedValueOrSerializedError?.data?.data?._id } });
      }
      console.log(rejectedValueOrSerializedError);
    }
  };
  return (
    <>
      {loading ? <Spinner /> : <></>}
      <section className="initial-sec">
        <div className="initial-row">
          <div className="leftCol">
            <Link to={"/xcelerando/prelogin"}>
              <img src="/assets/images/logo-2.png" alt="" />
            </Link>
          </div>
          <div className="rightCol p-3">
            {showVerification ? (
              <>
                <form className="loginForm" onSubmit={onOTPVerify}>
                  <h1 className="loginHeading pb-2">OTP Verification</h1>
                  <p className="loginDesc mb-3">We have sent you a SMS containing 6 Digits verification code. Please enter the code to verify your identity.</p>
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
                </form>
              </>
            ) : (
              <>
                <form className="loginForm loginForm_2 " onSubmit={handleSubmit}>
                  <h1 className="loginHeading">Phone Number</h1>
                  <p className="loginDesc mb-3">Enter your Phone Number for verification code</p>
                  <div>
                    <div className="form-group phoneinput mb-3 ps-4">
                      <PhoneInput defaultCountry="us" placeholder="Enter phone number" value={number} onChange={setNumber} />
                    </div>
                    {error && number?.trim()?.length < 1 && <div className="error-message">Phone number field can't be empty</div>}
                    {!isValid && error && <div className="error-message">Phone number is not valid</div>}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="cta mb-4">
                      Send
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Phone;

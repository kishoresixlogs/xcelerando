import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/font-awesome.css";
import "./assets/css/App.css";
import "./assets/css/Responsive.css";
import Layout from "./components/layout";
// import { messaging } from "./config/firebase";
// import { getToken } from "firebase/messaging";
import { useDispatch } from "react-redux";
// import { setDeviceToken } from "./store/slices/userSlice";
const App = () => {
  const dispatch = useDispatch()

  const handleNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        try {
          // const currentToken = await getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY })
          // dispatch(setDeviceToken({ deviceToken: currentToken }))
        } catch (err) {
          console.error("Error getting device token:", err);
          throw err;
        }
      } else {
        console.warn("Notification permission not granted");
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      throw error;
    }
  };


  useEffect(() => {
    handleNotificationPermission();
  }, []);
  return (
    <>
      <Layout />
    </>
  );
};

export default App;

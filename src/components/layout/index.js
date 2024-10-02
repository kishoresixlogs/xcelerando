import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserError, getUserStatus, getUserToken, sessionOut } from "../../store/slices/userSlice";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../header";
import Spinner from "../spinner";
import Login from "../../pages/login";
import Prelogin from "../../pages/prelogin";
import Signup from "../../pages/signup";
import Forgotpwd from "../../pages/forgotpswd";
import Verification from "../../pages/verifcation";
// import Phone from "../../pages/phone";
import ResetPassword from "../../pages/resetPassword";
// import SingleChat from "../../pages/chat/SingleChat";
import { disconnectSocket, socketConnection } from "../../store/slices/socketSlice";
// import MyEvents from "../../pages/myevents";
import PushNotifications from "../../helper/pushNotifications";
import Dashboard from "../../pages/dashboard";
import Students from "../../pages/students";
import Tasks from "../../pages/tasks";
import Library from "../../pages/library";
import Profile from "../../pages/profile";

// const Home = lazy(() => import("../../pages/home"));
// const Event = lazy(() => import("../../pages/event"));
// const Groups = lazy(() => import("../../pages/chat/Groups"));
// const GroupChat = lazy(() => import("../../pages/chat/GroupChat"));
// const Friends = lazy(() => import("../../pages/friends"));
// const GroupMembers = lazy(() => import("../../pages/chat/GroupMembers"));
// const Help = lazy(() => import("../../pages/setting"));
// const Searchresult = lazy(() => import("../../pages/search"));

const Layout = () => {
  const status = useSelector(getUserStatus);
  const authToken = useSelector(getUserToken);
  const error = useSelector(getUserError);
  const dispatch = useDispatch();

  if (error === 401) {
    dispatch(sessionOut());
    localStorage.clear();
  }
  useEffect(() => {
    if (authToken) {
      try {
        dispatch(socketConnection())
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        dispatch(disconnectSocket())
      } catch (error) {
        console.log(error)
      }
    }
  }, [authToken])
  return (
    <>
      {status === "loading" ? <Spinner /> : <></>}
      <BrowserRouter>
        {authToken && error !== 401 ? (
          <>
            <Header />
            <PushNotifications />
            <Routes>
              <Route path="*" element={<Navigate to="/xcelerando/" />} />
              {/* <Route path="/xcelerando/" element={<Suspense fallback={<Spinner />}><Home /></Suspense>} /> */}
              {/* <Route path="/xcelerando/event" element={<Suspense fallback={<Spinner />}><Event /></Suspense>} /> */}
              {/* <Route path="/xcelerando/profile" element={<Suspense fallback={<Spinner />}><Profile /></Suspense>} /> */}
              {/* <Route path="/xcelerando/edit-profile" element={<Suspense fallback={<Spinner />}><Editprofile /></Suspense>} /> */}
              {/* <Route path="/xcelerando/groups" element={<Suspense fallback={<Spinner />}><Groups /></Suspense>} /> */}
              {/* <Route path="/xcelerando/group-chat-messages" element={<Suspense fallback={<Spinner />}><GroupChat /></Suspense>} /> */}
              {/* <Route path="/xcelerando/chat-messages" element={<Suspense fallback={<Spinner />}><SingleChat /></Suspense>} /> */}
              {/* <Route path="/xcelerando/group-members" element={<Suspense fallback={<Spinner />}><GroupMembers /></Suspense>} /> */}
              {/* <Route path="/xcelerando/friends" element={<Suspense fallback={<Spinner />}><Friends /></Suspense>} /> */}
              {/* <Route path="/xcelerando/help" element={<Suspense fallback={<Spinner />}><Help /></Suspense>} /> */}
              {/* <Route path="/xcelerando/myevents" element={<Suspense fallback={<Spinner />}><MyEvents /></Suspense>} /> */}
              {/* <Route path="/xcelerando/searchresult" element={<Suspense fallback={<Spinner />}><Searchresult /></Suspense>} /> */}
              {/* <Route path="/xcelerando/searchresult" element={<Suspense fallback={<Spinner />}><Searchresult /></Suspense>} /> */}
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="*" element={<Navigate to="/xcelerando/prelogin" />} />
              <Route path="/xcelerando/login" element={<Login />} />
              <Route path="/xcelerando/dashboard" element={<Dashboard />} />
              <Route path="/xcelerando/students" element={<Students />} />
              <Route path="/xcelerando/tasks" element={<Tasks />} />
              <Route path="/xcelerando/libraries" element={<Library />} />
              <Route path="/xcelerando/profile" element={<Profile />} />
              <Route path="/xcelerando/prelogin" element={<Prelogin />} />
              <Route path="/xcelerando/signup" element={<Signup />} />
              <Route path="/xcelerando/forgotpassword" element={<Forgotpwd />} />
              <Route path="/xcelerando/resetpassword" element={<ResetPassword />} />
              <Route path="/xcelerando/verification" element={<Verification />} />
              {/* <Route path="/xcelerando/phone" element={<Phone />} /> */}
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default Layout;

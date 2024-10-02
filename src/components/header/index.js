import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNotificationCount, getProfile, updateCount } from "../../store/slices/userSlice";
import ChangePassword from "../modal/ChangePassword";
import Notification from "../modal/Notification";
// import Search from "../modal/Search";
import LogOut from "../modal/LogOut";
import { getSocket, notificationCount } from "../../store/slices/socketSlice";
import bell from '../../assets/images/bell.png'
import mail from '../../assets/images/mail.png'
import { Menu } from "lucide-react";
import MessageModal from "../modal/MessageModal";

const Header = ({isSidebarOpen, toggleSidebar, heading}) => {
  const [notificationModal, setNotificationModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [messageContent, setMessageContent] = useState(false);
  const countNotification = useSelector(getNotificationCount)
  const [dropDownToggle, setDropDownToggle] = useState(false);

  const handleNewMessage = () => {
    // Simulate receiving a new message
    setMessageContent("You have a new message!");
    setMessageModal(true);

    // Auto-close the modal after 5 seconds (optional)
    setTimeout(() => {
      setMessageModal(false);
    }, 5000);
  };

  const activeClass2 = dropDownToggle ? "active" : "";


  return (
    <>
      <header className="main-header">
        <div className='d-flex align-items-center'>
          {/* <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                            {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                        </button> */}
          {!isSidebarOpen ? <>
            <Menu className={`${isSidebarOpen ? '' : 'sidebar-toggle-btn'}`} onClick={toggleSidebar} />
          </> : <></>
          }
          <h1>{heading}</h1>
        </div>
        <div className="header-actions">
          <img src={bell} alt="bell" className='header-icon' onClick={(e) => setNotificationModal(true)} />
          <img src={mail} alt="mail" className='header-icon' onClick={handleNewMessage} />
        </div>
      </header>

      {/* <!-- Notification Modal --> */}
      {/* <!-- Notification Modal --> */}
      {/* {notificationModal && (
        <div className="notification-modal">
          <div className="modal-header-notification">
            <h3 className="modal-title">Notifications</h3>
            <button className="close-modal-btn-notification" onClick={() => setNotificationModal(false)}>✖</button>
          </div>
          <ul className="notification-list">
            <li className="notification-item">
              <span className="notification-icon">🔔</span>
              <div>
                <p><strong>John Doe</strong></p>
                <p>John Doe has completed his task</p>
              </div>
            </li>
            <li className="notification-item">
              <span className="notification-icon">🔔</span>
              <div>
                <p><strong>John Doe</strong></p>
                <p>John Doe has changed the task status</p>
              </div>
            </li>
          </ul>
        </div>
      )} */}

      {/* Message Modal */}
      <MessageModal
        show={messageModal}
        message={messageContent}
        onClose={() => setMessageModal(false)}
      />

      {/* <!--Search Filter Modal --> */}
      {/* {searchModal ?
        < Search type="header" searchModal={searchModal} setSearchModal={setSearchModal} />
        : <></>} */}
    </>
  );
};
export default Header;

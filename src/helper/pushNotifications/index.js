import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { onMessage } from "firebase/messaging";
import toast from "react-hot-toast";
import { messaging } from "../../config/firebase";
const PushNotifications = () => {
    const navigate = useNavigate()

    const navigationFunction = async (item, closeToast) => {
        if (item?.route == "friendList") {
            navigate("/xcelerando/friends", { state: { type: "friendList" } })
        } else if (item?.route == "requestList") {
            navigate("/xcelerando/friends", { state: { type: "requestList" } })
        } else if (item?.route == "chat-messages") {
            navigate("/xcelerando/chat-messages", { state: { userId: JSON.parse(item?.receiver_id) } })
        } else if (item?.route == "group-chat-messages") {
            navigate("/xcelerando/group-chat-messages", { state: { category: JSON.parse(item?.categoryId) } })
        } else if (item?.route == "myevents") {
            navigate("/xcelerando/myevents")
        } else if (item?.route == "event") {
            navigate("/xcelerando/event")
        }
        closeToast()
    };
    useEffect(() => {
        // const unsubscribe = onMessage(messaging, (payload) => {
        //     console.log("Foreground Notification Received", payload);
        //     const CustomToast = ({ toastId }) => {
        //         const closeToast = () => toast.dismiss(toastId);

        //         return (
        //             <div className="notification-banner">
        //                 <div className="notification-inner" onClick={() => navigationFunction(payload?.data, closeToast)}>
        //                     <img
        //                         src={
        //                             payload?.data?.image
        //                                 ? process.env.REACT_APP_APIURL + payload?.data?.image
        //                                 : "/assets/images/placeholder.jpg"
        //                         }
        //                         alt="Notification Image"
        //                         className="notification-image"
        //                     />
        //                     <div className="notification-content">
        //                         <div className="notification-title">{payload?.data?.title}</div>
        //                         <div className="notification-body">{payload?.data?.body}</div>
        //                     </div>
        //                 </div>
        //                 <div className="close-notification" onClick={closeToast}>
        //                     ✖
        //                 </div>
        //             </div>
        //         );
        //     };

        //     const showToast = () => {
        //         const toastId = toast.custom(() => <CustomToast toastId={toastId} />, {
        //             position: "bottom-left",
        //             duration: 500,
        //         });
        //     };
        //     showToast()
        // });
        return false;
        // return () => {
        //     // unsubscribe();
        // };
    }, []);
};
export default PushNotifications;

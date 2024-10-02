import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { getNotifications, readAllNotifications } from '../../store/featureActions';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Notification = ({ notificaionModal, setNotificationModal }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false);
    const [allNotifications, setAllNotifications] = useState([]);

    function closeModal() {
        setNotificationModal(false);
    }
    const notificationList = async () => {
        try {
            let payload = {
                params: false,
                isToast: false,
            };
            setLoader(true)
            const response = await dispatch(getNotifications(payload)).unwrap();
            setAllNotifications(response?.data?.notifications);
            setLoader(false)
            try {
                let payload = {
                    params: false,
                    isToast: false,
                };
                await dispatch(readAllNotifications(payload)).unwrap();
            } catch (rejectedValueOrSerializedError) {
                console.log(rejectedValueOrSerializedError);
            }
        } catch (rejectedValueOrSerializedError) {
            setLoader(false)
            console.log(rejectedValueOrSerializedError);
        }
    };

    const navigationFunction = async (item) => {
        if (item?.route == "friendList") {
            navigate("/xcelerando/friends", { state: { type: "friendList" } })
        } else if (item?.route == "requestList") {
            navigate("/xcelerando/friends", { state: { type: "requestList" } })
        } else if (item?.route == "group-chat-messages") {
            navigate("/xcelerando/group-chat-messages", { state: { category: item?.categoryId, sender_id: item?.userId } })
        } else if (item?.route == "myevents") {
            navigate("/xcelerando/myevents")
        }
        else if (item?.route == "event") {
            navigate("/xcelerando/event")
        }
        closeModal()
    };

    useEffect(() => {
        let mount = true;
        if (mount) {
            notificationList();
        }
        return () => {
            mount = false;
        };
    }, []);
    return (
        <>
            <Modal
                closeTimeoutMS={500}
                isOpen={notificaionModal}
                onRequestClose={closeModal}
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                }}
                className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                }}
                contentLabel="Change Password"
            >
                <div className=" escape_Modal show" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Notification
                                </h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="notification_content notificationContent">
                                    {loader ?
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "transparent", zIndex: 1500, }}>
                                            <div className="fa-2x">
                                                <i style={{ color: "#1D454C" }} className="fas fa-solid fa-spinner fa-spin-pulse"></i>
                                            </div>
                                        </div> : <>
                                            {allNotifications?.length > 0 ?
                                                allNotifications.map((item, i) => (
                                                    <div key={i} className="notifications" onClick={(e) => navigationFunction(item)}>
                                                        <div className="d_flexSpacebetween">
                                                            <p className="semiBold">{item?.action}</p>
                                                            <p>
                                                                <small>{moment(item?.createdAt).fromNow()}</small>
                                                            </p>
                                                        </div>
                                                        {item?.route == "friendList" ? <>
                                                            <p className="paragraph">{`${item?.otherUserId?.basics?.name ? item?.otherUserId?.basics?.name : <></>} ${item?.body}`}  </p>
                                                        </> : item?.route == "requestList" ? <>
                                                            <p className="paragraph">{`${item?.otherUserId?.basics?.name ? item?.otherUserId?.basics?.name : <></>} ${item?.body}`} </p>
                                                        </> : item?.route == "group-chat-messages" ? <>
                                                            <p className="paragraph">{`${item?.otherUserId?.basics?.name ? item?.otherUserId?.basics?.name : <></>} ${item?.body}`} {item?.categoryId?.categoryName ? item?.categoryId?.categoryName : <></>}</p>
                                                        </> : item?.route == "myevents" ? <>
                                                            <p className="paragraph">{`${item?.otherUserId?.basics?.name ? item?.otherUserId?.basics?.name : <></>} ${item?.body}`} {item?.eventId?.title ? item?.eventId?.title : <></>}</p>
                                                        </> : item?.route == "event" ? <>
                                                            <p className="paragraph">{`${item?.body}`} ({item?.eventId?.title ? item?.eventId?.title : <></>})</p>
                                                        </> : <></>}
                                                    </div>

                                                ))
                                                : <><div className='grp__chat'>No Notifications Found</div></>}
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}
export default Notification

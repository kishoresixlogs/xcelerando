import React, { useState } from "react";
import Modal from "react-modal";
import PaymentModal from "./PaymentModal";
import { useDispatch } from "react-redux";
import { claimEvent } from "../../store/featureActions";
import { useLocation } from "react-router-dom";
import moment from "moment";

const EventModal = ({ eventsList, setEventsList, openEventModal, setOpenEventModal, eventDetail, setEventDetail, type }) => {
  const [paymentModal, setPaymentModal] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const ids = location?.state?.ids;
  function closeModal() {
    setOpenEventModal(false);
    setEventDetail();
  }

  const handleChange = async (e) => {
    e.preventDefault();
    if (eventDetail?.type == "paid" && eventDetail?.price) {
      setOpenEventModal(false);
      setPaymentModal(true);
    } else {
      try {
        let payload = {
          params: `${eventDetail?._id}?ids=${JSON.stringify(ids?.length > 0 ? ids : [])}`,
          isToast: true,
        };
        await dispatch(claimEvent(payload)).unwrap();
        const sliceEvent = eventsList.filter((item) => item?._id !== eventDetail?._id);
        setEventsList(sliceEvent);
        setOpenEventModal(false);
      } catch (rejectedValueOrSerializedError) {
        console.log(rejectedValueOrSerializedError);
      }
    }
  };
  return (
    <>
      <Modal
        closeTimeoutMS={500}
        isOpen={openEventModal}
        onRequestClose={closeModal}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        contentLabel="Event Modal"
      >
        <div class=" escape_Modal show" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {type == "myevents" ? eventDetail?.eventId?.title : eventDetail?.title}
                </h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="escape_content">
                  <div className="escape_img">{type == "myevents" ? <img src={process.env.REACT_APP_APIURL + eventDetail?.eventId?.image} alt="" /> : <img src={process.env.REACT_APP_APIURL + eventDetail?.image} alt="" />}</div>
                  <div className="eventDetial">
                    <div className="d_flexSpacebetween">
                      <p className="tags"><b>Event Date</b> : {type == "myevents" ? moment(eventDetail?.eventId?.valid).format("DD-MMM-YYYY") : moment(eventDetail?.valid).format("DD-MMM-YYYY")}</p>
                      {type == "myevents" ? (
                        <p className="tags">
                          {eventDetail?.eventId?.type == "free" ? (
                            <b>Free</b>
                          ) : eventDetail?.discountedPrice ? (
                            <>
                              <b> <del className="strike-price">${eventDetail?.eventId?.price}</del> ${eventDetail?.discountedPrice}</b>

                            </>
                          ) : (
                            <b>${eventDetail?.price}</b>
                          )}
                        </p>
                      ) : (
                        <p className="tags">
                          {eventDetail?.type == "free" ? (
                            <b>Free</b>
                          ) : eventDetail?.discountedPrice ? (
                            <>
                              <b><del className="strike-price">${eventDetail?.price}</del> ${eventDetail?.discountedPrice}</b>
                            </>
                          ) : (
                            <b>${eventDetail?.price}</b>

                          )}
                        </p>
                      )}
                    </div>
                    <p className="tags"><b>#xcelerando's</b> : {type == "myevents" ? eventDetail?.eventId?.participantLimit : eventDetail?.participantLimit}</p>
                    <p className="tags"><b>Distance</b> : {eventDetail?.distance} miles</p>
                    <p className="tags"><b>Category</b> : {type == "myevents" ? eventDetail?.eventId?.category : eventDetail?.category}</p>
                    <p className="paragraph">{type == "myevents" ? eventDetail?.eventId?.description : eventDetail?.description}</p>
                  </div>
                  {type == "myevents" ? (
                    <></>
                  ) : (
                    <div className="btnSect" onClick={(e) => handleChange(e)}>
                      <a href="javascript:void(0)" className="cta">
                        Claim
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <PaymentModal paymentModal={paymentModal} setPaymentModal={setPaymentModal} eventDetail={eventDetail} ids={ids} eventsList={eventsList} setEventsList={setEventsList} />
    </>
  );
};
export default EventModal;

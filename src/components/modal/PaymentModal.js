import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import { addCard, claimEvent, getAllCard } from "../../store/featureActions";
import { useDispatch } from "react-redux";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PaymentModal = ({ paymentModal, setPaymentModal, ids, eventDetail, eventsList, setEventsList }) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [cardToggle, setCardToggle] = useState(false);
  const [disableButton, setDisableButton] = useState(false)
  const [cardId, setCardId] = useState(null);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  function closeModal() {
    setPaymentModal(false);
    setCardToggle(false);
    setCardId(null);
  }
  const handleAddCard = async () => {
    if (cardHolderName?.trim()?.length < 1) {
      toast.error("Card holder name can't be empty");
    } else {
      if (!stripe || !elements) {
        return;
      }
      setDisableButton(true)
      const cardNumberElement = elements.getElement(CardNumberElement);
      const { token, error } = await stripe.createToken(cardNumberElement);
      if (error) {
        toast.error(error?.message);
      }
      if (token) {
        try {
          let payload = {
            body: { cardTokenId: token?.id },
            params: false,
            isToast: false,
          };
          await dispatch(addCard(payload)).unwrap();
          toast.success("Card Added Successfully.");
          setCardToggle(false);
          setCardHolderName("");
          cardList();
        } catch (rejectedValueOrSerializedError) {
          console.log(rejectedValueOrSerializedError);
        }
      }
      setDisableButton(false)
    }
  };

  const cardList = async () => {
    try {
      let payload = {
        params: false,
        isToast: false,
      };
      const response = await dispatch(getAllCard(payload)).unwrap();
      setAllCards(response?.data?.cards?.data);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  const eventClaim = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        body: { cardId: cardId, price: eventDetail?.discountedPrice ? eventDetail?.discountedPrice : eventDetail?.price },
        params: `${eventDetail?._id}?ids=${JSON.stringify(ids)}`,
        isToast: true,
      };
      await dispatch(claimEvent(payload)).unwrap();
      const sliceEvent = eventsList.filter((item) => item?._id !== eventDetail?._id);
      setEventsList(sliceEvent);
      closeModal();
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  useEffect(() => {
    let mount = true;
    if (mount) {
      cardList();
    }
    return () => {
      mount = false;
    };
  }, []);
  return (
    <>
      <Modal
        closeTimeoutMS={500}
        isOpen={paymentModal}
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
        contentLabel="Payment Modal"
      >
        <div class=" escape_Modal show" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Payment Detail
                </h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="payment_options">
                        <b>Total Amount : ${ids?.length > 0 ? ((eventDetail?.discountedPrice ? eventDetail?.discountedPrice : eventDetail?.price) * (ids?.length + 1)) : eventDetail?.discountedPrice ? eventDetail?.discountedPrice : eventDetail?.price}</b>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="payment_options">
                        {allCards?.length > 0 ? (
                          allCards?.map((card, i) => (
                            <div key={i} className="form-check">
                              <label className="form-check-label" for={`flexRadioDefault${i}b`}>
                                {card?.brand == "Visa" ? <img src="/assets/images/payment_method1.png" alt="" /> : <img src="/assets/images/payment_method2.png" alt="" />}
                                <span className="px-3">XXXX XXXX XXXX {card?.last4}</span>
                              </label>
                              <input
                                className="form-check-input"
                                type="radio"
                                name={`flexRadioDefault${i}b`}
                                id={`flexRadioDefault${i}b`}
                                checked={cardId == card?.id ? true : false}
                                onChange={(e) => {
                                  setCardId(card?.id);
                                  setCardToggle(false);
                                }}
                              />
                            </div>
                          ))
                        ) : (
                          <>
                            <div style={{ textAlign: "center" }}>No Cards Found</div>
                          </>
                        )}
                      </div>
                      <div className="col-12 addCard mb-2">
                        <button
                          type="button"
                          className="cta"
                          onClick={(e) => {
                            setCardToggle((prev) => !prev);
                            setCardId(null);
                          }}
                        >
                          + add card
                        </button>
                      </div>
                    </div>
                    {cardToggle ? (
                      <>
                        <div className="col-12">
                          <div className="inputFields">
                            <input type="text" placeholder="Card holder name" onChange={(e) => setCardHolderName(e?.target?.value)} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="inputFields2">
                            <CardNumberElement />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="inputFields2">
                            <CardExpiryElement />
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="inputFields2">
                            <CardCvcElement />
                          </div>
                        </div>
                        <div className="col-12 escape_content mt-3">
                          <button type="button" className="cta" style={{ justifyContent: "center" }} disabled={disableButton} onClick={handleAddCard}>Save Card</button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="col-12 escape_content mt-3">
                      {cardToggle ? (
                        <></>
                      ) : allCards?.length > 0 ? (
                        <div className="btnSect" onClick={eventClaim}>
                          <a href="javascript:void(0)" className="cta">
                            Pay Now
                          </a>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PaymentModal;

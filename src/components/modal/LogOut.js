import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../store/featureActions";
import Modal from "react-modal";
import { persistor } from "../../store";
// import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
Modal.setAppElement("#root");
const LogOut = ({ logOutModal, setLogOutModal }) => {
  const dispatch = useDispatch();
  function closeModal() {
    setLogOutModal(false);
  }
  const handleLogout = async () => {
    signOut("auth").then(
      async () => {
        // Sign-out successful.
        console.log("Signed Out");
        try {
          let payload = {
            body: false,
            params: false,
            isToast: true,
          };
          await dispatch(userLogout(payload)).unwrap();
          persistor
            .purge()
            .then(() => {
              console.log("Persisted storage cleared successfully");
            })
            .catch((error) => {
              console.log("Error occurred while clearing persisted storage:", error);
            });
        } catch (rejectedValueOrSerializedError) {
          console.log(rejectedValueOrSerializedError);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <>
      <Modal
        closeTimeoutMS={500}
        isOpen={logOutModal}
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
        contentLabel="Change Password"
      >
        <div class="escape_Modal show" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Confirmation
                </h5>
                <button type="button" class="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p className="messageClass">Are you sure, you want to logout?</p>
                <div className="container">
                  <div className="row log-btns">
                    <div className="col">
                      <button type="submit" className="cta log__btn mb-4" onClick={closeModal}>
                        Cancel
                      </button>
                    </div>
                    <div className="col">
                      <button type="submit" className="cta log__btn mb-4" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default LogOut;

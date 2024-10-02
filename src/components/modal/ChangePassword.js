import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../store/featureActions";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ChangePassword = ({ changePasswordModal, setChangePasswordModal }) => {
  const [isSecureEntry, setisSecureEntry] = useState(true);
  const [isSecureEntry2, setisSecureEntry2] = useState(true);
  const [isSecureEntry3, setisSecureEntry3] = useState(true);
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [error, setError] = useState(false);
  const passwordPatern = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+/;

  const dispatch = useDispatch();
  let isValid = currentPassword?.trim()?.length > 0 && passwordPatern.test(newPassword) && confirmNewPassword == newPassword;
  function closeModal() {
    setChangePasswordModal(false);
    setConfirmNewPassword("");
    setNewPassword("");
    setCurrentPassword("");
    setError(false);
  }
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError(true);
    if (isValid) {
      try {
        let payload = {
          body: { existingPassword: currentPassword, newPassword, confirmNewPassword },
          params: false,
          isToast: true,
        };
        await dispatch(changePassword(payload)).unwrap();
        closeModal();
      } catch (rejectedValueOrSerializedError) {
        console.log(rejectedValueOrSerializedError);
      }
    }
  };

  return (
    <>
      <Modal
        closeTimeoutMS={500}
        isOpen={changePasswordModal}
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
                  Change Password
                </h5>
                <button type="button" class="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form className="loginForm changepsd" onSubmit={handleChangePassword}>
                  <div className="modal-chnage-eror">
                  <div className="form-group logInput mb-3">
                    <input type={`${isSecureEntry ? "password" : "text"}`} value={currentPassword} placeholder="Current Password" onChange={(e) => setCurrentPassword(e?.target?.value)} />
                    <span className="absIcon">
                      <img src="/assets/images/password.png" alt="img" className="w-100" />
                    </span>
                    <span
                      className="absIcon_2"
                      onClick={() => {
                        setisSecureEntry((prev) => !prev);
                      }}
                    >
                      <i className={`fas fa-solid ${!isSecureEntry ? "fa-eye-slash" : "fa-eye"}`} style={{ color: "gray", fontSize: 18 }}></i>
                    </span>
                  </div>
                  {error && !currentPassword && <div className="error-message password-error">Current Password field can't be empty.</div>}
                  </div>
                  <div className="modal-chnage-eror">
                  <div className="form-group logInput mb-3">
                    <input type={`${isSecureEntry2 ? "password" : "text"}`} value={newPassword} placeholder="New Password" onChange={(e) => setNewPassword(e?.target?.value)} />
                    <span className="absIcon">
                      <img src="/assets/images/password.png" alt="img" className="w-100" />
                    </span>
                    <span
                      className="absIcon_2"
                      onClick={() => {
                        setisSecureEntry2((prev) => !prev);
                      }}
                    >
                      <i className={`fas fa-solid ${!isSecureEntry2 ? "fa-eye-slash" : "fa-eye"}`} style={{ color: "gray", fontSize: 18 }}></i>
                    </span>
                  </div>
                    {error && !newPassword && <div className="error-message password-error">New password field can't be empty.</div>}
                    {error && newPassword && !passwordPatern.test(newPassword) && <div className="error-message ">Password should be 8 characters long (should contain uppercase, lowercase, numeric and special character).</div>}
                    </div>
                    <div className="modal-chnage-eror">
                  <div className="form-group logInput mb-3">
                    <input type={`${isSecureEntry3 ? "password" : "text"}`} value={confirmNewPassword} placeholder="Confirm New Password" onChange={(e) => setConfirmNewPassword(e?.target?.value)} />
                    <span className="absIcon">
                      <img src="/assets/images/password.png" alt="img" className="w-100" />
                    </span>
                    <span
                      className="absIcon_2"
                      onClick={() => {
                        setisSecureEntry3((prev) => !prev);
                      }}
                    >
                      <i className={`fas fa-solid ${!isSecureEntry3 ? "fa-eye-slash" : "fa-eye"}`} style={{ color: "gray", fontSize: 18 }}></i>
                    </span>
                  </div>
                  {error && !confirmNewPassword && <div className="error-message password-error">Confirm new password field can't be empty.</div>}
                  {error && confirmNewPassword && newPassword !== confirmNewPassword && <div className="error-message ">New password and Confirm new password must be same.</div>}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="cta mb-4">
                      Update
                    </button>
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
export default ChangePassword;

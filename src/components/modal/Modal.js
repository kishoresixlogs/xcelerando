// Modal.js
import React from 'react';
import './modal.css'; // Create a separate CSS file for styling the modal

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="close-btn" onClick={closeModal}>X</button> */}
                {children}
            </div>
        </div>
    );
};

export default Modal;

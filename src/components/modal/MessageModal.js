import React from 'react';

const MessageModal = ({ show, onClose, message }) => {
  if (!show) {
    return null; // Don't render anything if `show` is false
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>New Message</h3>
        <p>{message}</p>
        <button className='' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MessageModal;

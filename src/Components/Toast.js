import React from 'react';

const Toast = ({ show, onClose }) => {
  return (
    <div className={`toast align-items-center ${show ? 'show' : 'hide'}`} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="d-flex">
        <div className="toast-body">
        Welcome to Brew Bliss! Your happiness is our priority.
        </div>
        <button type="button" className="btn-close me-2 m-auto" onClick={onClose} aria-label="Close"></button>
      </div>
    </div>
  );
};

export default Toast;

import React from 'react';
import classes from './Modal.module.css'; 

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <button className={classes.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { FaCheck, FaExclamationCircle, FaBug } from "react-icons/fa";
import styles from './toast.module.css'

export const displayIcon = (type) => {
  switch (type) {
    case "success":
      return <FaCheck />;
    case "error":
      return <FaExclamationCircle />;
    default:
      return <FaBug />;
  }
};

const ToastMessage = ({ type, message }) =>
  toast[type](
    <div className={styles.toastContainer} >
      <div className={styles.toast}>
        {message}
      </div>
    </div>
  );

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;

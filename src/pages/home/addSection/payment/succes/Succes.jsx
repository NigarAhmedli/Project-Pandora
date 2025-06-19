import React from 'react';
import styles from "./Succes.module.scss";
import { FaRegCheckCircle } from "react-icons/fa";

const Succes = () => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.card}>
        <FaRegCheckCircle className={styles.icon} />
        <h1>Payment Completed</h1>
        <p>Your payment was successfully processed. Thank you for your purchase!</p>
      </div>
    </div>
  );
};

export default Succes;

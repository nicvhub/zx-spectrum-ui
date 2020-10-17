import React from "react";
import styles from "./KeyboardButton.module.css";

const KeyboardButton = ({ label }) => {
  return <button className={styles.rubberButton}>{label}</button>;
};


export default KeyboardButton;

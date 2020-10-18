import React from "react";
import styles from "./KeyboardButton.module.css";

export type KeyboardButtonProps = {
  label: string
}
const KeyboardButton = ({label}: KeyboardButtonProps ) => {
  return (
    <div className={styles.rubberButtonContainer}>
      <button className={styles.rubberButton}>
        <div className={styles.rubberButtonText}>{label}</div>
      </button>
    </div>
  );
};


export default KeyboardButton;

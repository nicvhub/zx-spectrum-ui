import React from "react";
import styles from "./KeyboardButton.module.css";

export type KeyboardButtonProps = {
  label: string;
};
const KeyboardButton = ({ label }: KeyboardButtonProps): JSX.Element => {
  const fiveCharacterTitle = label.slice(0, 5);
  const firstCharacter = fiveCharacterTitle[0];

  return (
    <div className={styles.rubberButtonContainer}>
      <button type="button" className={styles.rubberButton}>
        <div
          data-first-char={firstCharacter}
          className={styles.rubberButtonText}
        >
          {fiveCharacterTitle}
        </div>
      </button>
    </div>
  );
};

export default KeyboardButton;

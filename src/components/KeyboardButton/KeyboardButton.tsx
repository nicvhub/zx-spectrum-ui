import React from "react";
import styles from "./KeyboardButton.module.css";
import { ALPHABET } from "./types";
import { KEY_TO_ALT } from "./const";

export type KeyboardButtonProps = {
  label: string;
};

const KeyboardButton = ({ label }: KeyboardButtonProps): JSX.Element => {
  const fiveCharacterTitle = label.slice(0, 5);
  const firstCharacter: ALPHABET | "" = fiveCharacterTitle[0]
    ? (fiveCharacterTitle[0].toUpperCase() as ALPHABET)
    : "";
  const altKeyFunction: string = firstCharacter
    ? KEY_TO_ALT[firstCharacter]
    : "";
  return (
    <div className={styles.rubberButtonContainer}>
      <button type="button" className={styles.rubberButton}>
        <div
          data-super-script={firstCharacter}
          data-alt={altKeyFunction}
          className={styles.rubberButtonText}
        >
          {fiveCharacterTitle}
        </div>
      </button>
    </div>
  );
};

export default KeyboardButton;

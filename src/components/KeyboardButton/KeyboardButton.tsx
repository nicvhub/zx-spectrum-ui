/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { RUBBER, WHITE, RED } from "../../constants/colors";
import { ALPHABET } from "./types";
import { KEY_TO_ALT } from "./const";

export type KeyboardButtonProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const KeyboardButton = ({
  label,
  onClick,
}: KeyboardButtonProps): JSX.Element => {
  const fiveCharacterTitle = label.slice(0, 5);
  const firstCharacter: ALPHABET | "" = fiveCharacterTitle[0]
    ? (fiveCharacterTitle[0].toUpperCase() as ALPHABET)
    : "";
  const altKeyFunction: string = firstCharacter
    ? KEY_TO_ALT[firstCharacter]
    : "";

  return (
    <div
      css={css`
        position: relative;
        height: 40px;
        width: 60px;
      `}
    >
      <button
        type="button"
        css={css`
          height: inherit;
          width: inherit;
          border-radius: 3px;
          background-color: ${RUBBER};
          border-style: none;
        `}
        onClick={onClick}
      >
        <div
          data-super-script={firstCharacter}
          data-alt={altKeyFunction}
          css={css`
            position: absolute;
            bottom: 7px;
            width: 48px;
            text-align: right;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 0.6rem;
            color: ${WHITE};
            &:before {
              content: attr(data-super-script);
              position: absolute;
              top: -20px;
              left: 0px;
              font-size: 1.3rem;
            }
            &:after {
              content: attr(data-alt);
              position: absolute;
              top: -20px;
              right: 0px;
              font-size: 0.6rem;
              color: ${RED};
            }
          `}
        >
          {fiveCharacterTitle}
        </div>
      </button>
    </div>
  );
};

export default KeyboardButton;

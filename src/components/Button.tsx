import React from "react";
import stylex from "@stylexjs/stylex";


const BUTTON_STYLES = stylex.create({
  base: {
    border: "none",
    background: "none",
    padding: ".5em 1em",
    borderRadius: ".25em",
    cursor: "pointer",
  },
  primary: {
    color: "white",
    backgroundColor: "#00AAFF",
  },
  danger: {
    color: "white",
    backgroundColor: "#FF0000",
  },
});

export const Button = ({ variant = "primary", isLarge = false, ...props }) => {
  return <button {...stylex.props(BUTTON_STYLES.base)} {...props} />;
};

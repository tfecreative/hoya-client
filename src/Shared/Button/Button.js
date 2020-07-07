import React from "react";
import "./Button.scss";

const Button = (props) => {
  function handleClick(event) {
    event.preventDefault();
    props.onClick();
  }
  return (
    <button
      onClick={handleClick}
      className={"btn btn-" + props.theme}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default Button;

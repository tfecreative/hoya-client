import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <button className={"btn btn-" + this.props.theme}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

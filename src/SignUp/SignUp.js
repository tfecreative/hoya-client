import React, { Component } from "react";
import Button from "Shared/Button/Button";

import "./SignUp.scss";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    // TODO: submit sign up form
  };

  render() {
    return (
      <section className="sign-up">
        <div className="sign-up-card">
          <form className="form sign-up-form">
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-actions">
              <Button theme="primary" onClick={this.handleSubmit}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;

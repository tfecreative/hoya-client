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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
  };

  render() {
    return (
      <section className="sign-up">
        <form className="form sign-up-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input type="text"></input>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="text"></input>
          </div>
          <div className="form-actions">
            <Button type="submit" theme="primary">
              Sign In
            </Button>
          </div>
        </form>
      </section>
    );
  }
}

export default SignUp;

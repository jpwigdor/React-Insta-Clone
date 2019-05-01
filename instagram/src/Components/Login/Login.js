import React, { Component } from "react";

import logo from "../../assets/logo_word.png";
import phone from "../../assets/Login_Phones.PNG";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      // <img className="login-phone" src={phone} alt="instagram phones"/>
      <div className="container-login-form">
        <img src={phone} className="login-phone" alt="phone logo" />
        <form className="login-form">
          <img src={logo} className="login-logo" alt="" />
          <div className="login-text">
            Log In to see photos and videos from your friends.
          </div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleLoginSubmit} className="login-button">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

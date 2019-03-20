import React, { Component } from "react";

import "./Login";

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
      <form className="login-form">
        <h2> Instagram </h2>
        <input
          type="text"
          placeholder="Phone number, username, or email"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleLoginSubmit}>Log In</button>
      </form>
    );
  }
}

export default Login;

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

  render() {
    return (
      <div className="login-form">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="Phone number, username, or email"
          name="username"
          value={this.state.username}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={this.state.password}
        />
        <button>Log In</button>
      </div>
    );
  }
}

export default Login;

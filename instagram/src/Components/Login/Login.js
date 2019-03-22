import React, { Component } from "react";

// import phone from "../../assets/Login_Phones.png";
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
        <form className="login-form">
          <h1> Instagram </h1>
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
      </div>
    );
  }
}

export default Login;

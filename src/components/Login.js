import React, { Component } from "react";
import "./style.css";
export class Login extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="login">
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username "
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

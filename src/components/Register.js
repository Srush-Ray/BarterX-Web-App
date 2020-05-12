import React, { Component } from "react";
import "./style.css";
export class Register extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="login">
            <h1>Register</h1>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username "
              required
            />
            <label htmlFor="email">EmailId:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jao@gmail.com"
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
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;

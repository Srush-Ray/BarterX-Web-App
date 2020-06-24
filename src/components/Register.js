import React, { Component } from "react";
import "../styles/loginRegister.css";
import Navbar from "../container/NavBar";
import image from '../components/images/bartar.png'; 
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      affiliation:"",
      email:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
   
  }
  render() {
    return (
     
      <div>
      <Navbar />
      <div >
      <div className="section">
      <div className="container">
      <div className="user signinBx">
      <div className="imgBx">
      <img src={image} alt="BaterX" />
      </div>
            <div className="formBx">
            <form onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  className="form-control input"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="affiliation"
                  placeholder="Affiliation"
                  autoComplete="off"
                  className="form-control input"
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EmailId"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control input"
                  autoComplete="off"
                  onChange={this.handleChange}
                  />
                  <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="form-control input"
                  autoComplete="off"
                  onChange={this.handleChange}
                  />
                  <input type="submit" value="Sign Up" />
                  
                  </form>
            </div>
            </div>
        </div>
        </div>
    
        </div>
        </div>
              );
            }
}

export default Register;

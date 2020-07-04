import React, { Component } from "react";
import '../styles/loginRegister.css'
import Navbar from "../container/NavBar";
import image from '../components/images/bartar.png'; 
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  componentDidMount(){
    console.log(localStorage);
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
            <h2>Login</h2>
                <input
                type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  className="form-control input"
                  onChange={this.handleChange}
                />
                
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control input"
                  autoComplete="off"
                  onChange={this.handleChange}
                  />
                  

                  <input type="submit" value="Login" />
                  
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

export default Login;
// <div className="container">

// <form>
      // <div className="login">
      // <h1>Login</h1>
      //       <label htmlFor="username">Username:</label>
      //       <input
      //       type="text"
      //       id="username"
      //         name="username"
      //         placeholder="Username "
      //         required
      //         />
      //         <label htmlFor="password">Password:</label>
      //         <input
      //         type="password"
      //         id="password"
      //         name="password"
      //         placeholder="Password"
      //         required
      //         />
      //         <button className="btn" type="submit">
      //         Login
      //         </button>
      //         <div className="reg">
      //         <a href="#">Forgot password?</a>
              
      //         <a id="signup" href="./Register">
      //         dont have an account ? Signup
      //         </a>
      //         </div>
      //         </div>
      //         </form>
      //         </div>
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import barter from '../components/images/bartar.png'; 
const Navbar = ({ auth, logout }) => (
  <div className="navbar-wrapper">
      <div className="container-fluid">
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark " style={{backgroundColor:'#F7F7F9'}}>
  <img src={barter} alt="logo" style={{width:'80px',height:"35px"}} className="img"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
  <ul id="ul" className="navbar-nav ml-auto">
         {
           (
            <Fragment>
              <li id="li" className="nav-item" >
                <Link className="nav-link" to="/register" style={{color:'black'}} >
                  Register
                </Link>
              </li>
              <li id="li" className="nav-item">
                <Link className="nav-link" to="/" style={{color:'black'}}>
                  Login
                </Link>
              </li>
            </Fragment>
          )}
      </ul>
  </div>
</nav>
</div>
</div>
);

export default Navbar;

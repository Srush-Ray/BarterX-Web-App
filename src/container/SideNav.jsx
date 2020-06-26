import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/sidenav.css'
import {
  MdAddCircle,
  MdPermIdentity,
  MdMenu
} from "react-icons/md";
import barter from '../components/images/bartar.png'; 

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    const { logout } = this.props;
    logout();
  }
  state = {};
  render() {
    const activeNow = this.props.activeComponent;
    return (
        <div>
        <div className="sidenav" >
        <a href="/home" className=" mt-2"><img src={barter} alt="logo" style={{width:'150px',height:"50px",marginLeft:'20px',marginTop:'10px'}} className="img"/></a>
        {/*<h4 className="text-dark text-center mt-2 ">BaterX</h4>*/}
        <hr />
        <p className="mt-4"><u> Menu</u></p>
        <ul id="ul">
          <Link to="/home">
          <li id="li" className={activeNow === "1" ? "sidenav-active" : ""}>
              <span className="mx-2">
              <MdPermIdentity />
              </span>
              Profile
            </li>
            </Link>
          <Link to="/products">
          <li id="li" className={activeNow === "2" ? "sidenav-active" : ""}>
              <span className="mx-2">
              <MdMenu />
              </span>
              All Products
              </li>
          </Link>
          <Link to="/productSettings">
          <li id="li" className={activeNow === "3" ? "sidenav-active" : ""}>
          <span className="mx-2">
          <MdAddCircle />
          </span>
          Product Settings
          </li>
          </Link>
          <Link to="/Search">
          <li id="li" className={activeNow === "4" ? "sidenav-active" : ""}>
          <span className="mx-2">
          <MdAddCircle />
          </span>
          Search
          </li>
          </Link>
          <Link to="/Transactions">
          <li id="li" className={activeNow === "5" ? "sidenav-active" : ""}>
          <span className="mx-2">
          <MdAddCircle />
          </span>
          Previous Transactions
          </li>
          </Link>
          
          </ul>
          </div>
          </div>
    );
  }
}

export default Sidenav;

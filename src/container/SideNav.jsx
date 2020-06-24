import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/sidenav.css'
import {
  MdAddCircle,
  MdPermIdentity,
  MdMenu
} from "react-icons/md";

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
        <h4 className="text-dark text-center mt-2 logoname">BaterX</h4>
        <hr />
        <p className="mt-4">Menu</p>
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
          
          </ul>
          </div>
          </div>
    );
  }
}

export default Sidenav;

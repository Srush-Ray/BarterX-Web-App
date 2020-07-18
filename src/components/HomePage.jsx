import React, { Component } from "react";
import Sidenav from "../container/SideNav";
// import { showProfile } from "../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import { Card, CardTitle, CardBody } from "reactstrap";
import SideNavPage from "../container/SideNavPage";
import NavbarPage from "../container/NavbarPage";
import Footer from "../container/Footer";
import {banner} from "../components/images/banner.png";
import "../styles/HomePage.css";
import Carousel from "./Carousel";
import Products from "./Products";
class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.state={

    }
    }
 

  render() {
    return (
      <div>
      <NavbarPage/>
        <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
            </div>
        </div>
        <div>
        <Carousel />
        </div>
        <div>
        <Products />
        </div>
        </div>
      </div>
          );
  }
}

export default connect((store)=>({
}),{

})(HomePage);

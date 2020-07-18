import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import '../styles/footer.css';
import logo from '../components/images/bartar.png'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
    return (


        // <div className="main-footer" >
        // <div className="container">
        // <div className="row" >
        //     {/* Column 1 */}
        //     <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
        //     <h4>Information</h4>
        //     <ul className="list-unstyled">
        //     <li><Link style={{color:'#000'}}>About Us</Link></li>
        //     <li><Link style={{color:'#000'}}>Team</Link></li>
        //     <li><Link style={{color:'#000'}}>Careers</Link></li>
        //     <li><Link style={{color:'#000'}}>Terms & Conditions</Link></li>
        //     <li><Link style={{color:'#000'}}>Contact Us</Link></li>
        //     </ul>
        //     </div>
        //     {/* Column 2 */}
        //     <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
        //     <h4>Contact</h4>
        //     <ul className="list-unstyled">
        //     <li><Link style={{color:'#000'}}>Help & Support</Link></li>
        //     <li><Link style={{color:'#000'}}>Partner with us</Link></li>
        //     <li><Link style={{color:'#000'}}>Ride with us</Link></li>
        //     </ul>
        //     </div>  
        //      {/* Column 2 */}
        //      <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
        //     <h4>Legal</h4>
        //     <ul className="list-unstyled">
        //     <li><Link style={{color:'#000'}}>Terms & Conditions</Link></li>
        //     <li><a href="./Document" style={{color:'#000'}}>Privacy Policy</a></li>
        //     <li><a href="./Document2" style={{color:'#000'}}>Cookie Policy</a></li>
        //     <li><Link style={{color:'#000'}}>Offer Terms</Link></li>
        //     </ul>
        //     </div>  
        //     { /* Column 3 */}
        //     <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
        //     <h4>Yes we are social</h4>
        //     <ul className="list-unstyled">
        //     <FaInstagram size='2rem' className="FaInstagram" />
        //     <FaWhatsapp size='2rem' style={{marginLeft:'10%'}} className="FaWhatsapp"/>
        //     <FaFacebookSquare size='2rem' style={{marginLeft:'10%'}} className="FaFacebookSquare"/>
        //     </ul>
        //     </div>   
        // </div>

        // <div className="footer-bottom" >
        //         <p className="text-xs-center">
        //             <b>&copy;{ new Date().getFullYear() } - HomeChef | Erfinden Technologies Pvt.Ltd.</b>
        //         </p>
        // </div>

        // </div>    
        // </div>
        <MDBFooter className="font-small pt-4 mt-4 main-footer">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
          <MDBCol md="3" sm="6">
             <img src={logo} className="logo" alt="BarterX"/>
            </MDBCol>
            <MDBCol md="3" sm="6">
            <ul className="list-unstyled">
            <li><Link >Home</Link></li>
            <li><Link >Log in</Link></li>
            </ul>
            </MDBCol>
            <MDBCol md="3" sm="6">
              <h5 className="title">All Categories</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="/category?Vehicles">Vehicles</a>
                </li>
                <li className="list-unstyled">
                  <a href="/category?Electronics">Electronics</a>
                </li>
                <li className="list-unstyled">
                  <a href="/category?Books">Books</a>
                </li>
                <li className="list-unstyled">
                  <a href="/category?Sports">Sports</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol className="text-right" md="3" sm="6">
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">customer.care@Barterx.co.in</a>
              </li>
              <li className="list-unstyled">
               09867665457
              </li>
            </ul>
          </MDBCol>
            </MDBRow>
          
        </MDBContainer>
        <div className="footer-copyright text-right py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()}<a href="https://www.mdbootstrap.com"> All rights reserved </a>
          </MDBContainer>
        </div>
      </MDBFooter>
        
        
    )
}

export default Footer;
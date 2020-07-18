import React, { Component } from "react";
import {Navbar,Nav, NavDropdown} from "react-bootstrap";
import '../styles/navbar.css';
import logo from '../components/images/bartar.png'; 
import { RiLogoutBoxLine } from "react-icons/ri";
import {
    MdPerson, MdRestore, MdViewHeadline, MdSettings, MdAttachMoney,
  
  } from "react-icons/md";
class NavbarPage extends Component {
state = {
  isOpen: false
};
  handleLogout() {
    // const { logout } = this.props;
    // logout();
  }
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <div>
    <Navbar bg="light" variant="light" sticky="top">
    <a href="/home" className=" mt-2"><img src={logo} alt="logo" style={{width:'80px',height:'45px'}}/></a>
    <Nav className="ml-auto" style={{marginRight:"10px"}}>
   
    
    <NavDropdown id="collasible-nav-dropdown" title={ <MdPerson size={32} style={{color:"orange",marginRight:"15px"}}/>}>
      <NavDropdown.Item href="/profile"> <MdPerson size={20} style={{color:"#A84DA1"}} /> My Profile </NavDropdown.Item>
      <NavDropdown.Divider />  
      <NavDropdown.Item href="/transactions"><MdRestore  size={20} style={{color:"#A84DA1"}}/>Past Transaction</NavDropdown.Item>
        <NavDropdown.Item href="/myproducts"><MdViewHeadline size={20} style={{color:"#A84DA1"}}/>My products</NavDropdown.Item>
        <NavDropdown.Item href="/buytokens"><MdAttachMoney size={20} style={{color:"#A84DA1"}}/> Buy Tokens</NavDropdown.Item>
        <NavDropdown.Item href=""><MdSettings size={20} style={{color:"#A84DA1"}}/> Setting</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><RiLogoutBoxLine size={20} style={{color:"#A84DA1"}}/>
        <a onClick={this.handleLogout} href="/">Logout</a>        
        </NavDropdown.Item>
      </NavDropdown>


      <Nav.Link href="/search" style={{fontSize:"20px",color:"#C45BBD"}}>All Products</Nav.Link>
    </Nav>
    {/*<Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>*/}
  </Navbar>
     
  </div>
    );
  }
}

export default NavbarPage;
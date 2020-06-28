import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

function Array1 (props)  {
    
    return (   
                
                <div className="item" style={{border:'solid', marginRight:'1.5%', marginLeft:'1.5%', marginTop:'2%',marginBottom:'2%', paddingTop:'3%', borderRadius:'10px', backgroundColor:'white'}}>
                    <p><b>Transaction Id : {props.id}</b></p>
                    <p><b>Product Name : {props.product}</b></p>
                    <p><b>Total Cost : {props.price}</b></p>
                    <p><b>OwnerID : {props.ownerid}</b></p>
                    <p><b>Date : {props.date}</b></p>
                    <Nav >
                   { /*<p ><Link className="nav-link" to=""><b>details</b></Link></p>
    <p ><Link className="nav-link text-dark" to=""><b>Close</b></Link></p>*/}
                    </Nav>
                </div>  
                

    )   
    
    }

export default Array1;


import React from 'react';
import phone from './images/phone.jpg'
import "./style.css";
function Array (props)  {
    
    return (   
                
                <div className="item col-md-2 col-sm-4 hover"  style={{border:'solid', marginRight:'1.5%', marginLeft:'1.5%', marginTop:'2%', borderRadius:'20px',padding:'2% 2%', backgroundColor:'#F1EFEF'}}>
                <img src={phone} alt="" style={{width:'95%', height:'50%', marginTop:'2.5%',marginLeft:'2.5%',marginRight:'2.5%', borderRadius:'5%'}}/>
                <p style={{textAlign:'left', color:'black',marginTop:'8%'}}><b>Product Name : </b>{props.name}</p>
                <p style={{textAlign:'left', color:'black'}}><b>category : </b>{props.category}</p>
                {/* <p style={{textAlign:'left', color:'black'}}><b>Status : </b>{props.status}</p> */}
                {/* <p style={{textAlign:'left', color:'black'}}><b>productDescription : </b>{props.productDescription}</p> */}
                </div>  
                
    )   
    
    }

export default Array;


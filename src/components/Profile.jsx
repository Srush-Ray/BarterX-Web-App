import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardBody } from "reactstrap";
import NavbarPage from "../container/NavbarPage";
import Footer from "../container/Footer";
import { Tab,Tabs, TabList, TabPanel } from 'react-tabs';
import ViewProfile from "./ViewProfile ";
import EditProfile from "./EditProfile";
import 'react-tabs/style/react-tabs.css';
import Wallet from "./Wallet";

class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
      <NavbarPage /> 
      <Tabs>
      <TabList style={{fontStyle:"bold"}}>
      <Tab>View Profile</Tab>  
      <Tab>Edit Profile</Tab>        
      <Tab>Wallet</Tab>        
      </TabList>
      <TabPanel>
      <ViewProfile />      
      </TabPanel>
      <TabPanel>
      <EditProfile />      
      </TabPanel>
      <TabPanel>
      <Wallet />      
      </TabPanel>
      </Tabs>
      <Footer />
      </div>
    //   <div>
    //   <NavbarPage /> 
    //   <div className="wrapper">
    // <div className="container-fluid">
    //        <h4 style={{color:'#FFFFFF'}}> <u> Profile</u></h4>
    //           <Card style={{boxShadow:'7px 7px rgb(167,167,167'}}>
    //           <CardBody>
    //           <CardTitle className="card-header">
    //           <div className="text-muted" >
    //             <h6> Username: {this.state.wallet.usr_id} </h6>
    //           </div>
    //           </CardTitle>
             
    //           {
    //             <div>   
    //             <form id="form" onSubmit={this.handleSubmit}>
    //             {/* <div className="alert alert-info">
    //            Click <strong>Edit</strong> to fill in the details and{" "}
    //            <strong>Update</strong> the information :
    //               </div>
    //             <hr />*/}
    //               <div className="container-fluid">
                  
    //                 <div className="form-row my-2">
    //                 <div className="col-sm-6">
    //                 Username:
    //                 <input
    //                 readOnly
    //                   type="text"
    //                   name="username"
    //                   id="username"
    //                   placeholder={this.state.wallet.usr_id}
    //                   className="form-control border-0"
    //                   style={{background: '#ffffff'}}
    //                 />
    //                 </div>  
    //                 <div className="col-sm-6">
    //                 Email Id:
    //                 <input
    //                       readOnly
    //                       type="email"
    //                       name="emailId"
    //                       id="emailId"
    //                       placeholder={this.state.emailID}
    //                       className="form-control border-0"
    //                       style={{background: '#ffffff'}}
    //                       />
    //                     </div>
                        
    //                     </div>
    //                     </div>
    //              {/* <hr />
    //              <div className="text-right">
    //              <button
    //                   type="button"
    //                   id="editButton"
    //                   className="btn btn-secondary"
    //                   onClick={this.editform}
    //                   >
    //                   Edit
    //                   </button>
    //                   <button className="btn btn-light mx-2" type="reset">
    //                 Reset
    //                 </button>
    //                 <button type="submit" className="btn btn-primary" id="cancelBtn" disabled>
    //                 Update Profile
    //                 </button>
    //                 </div> */} 
    //                 </form>
    //                 <hr/>
    //                 <h5 >Wallet Details</h5>
    //                 <form>
    //                 <div className="form-row my-2" >
    //                 <div className="col-sm-6">
    //                 Affiliation:
    //                 <input
    //                 readOnly
    //                 type="text"
    //                   name="affiliation"
    //                   id="affiliation"
    //                   placeholder={this.state.wallet.org_aff}
    //                   className="form-control border-0"
    //                   style={{background: '#ffffff'}}
    //                   />
    //                 </div>  
    //                 <div className="col-sm-6">
    //                 Organisation Name:
    //                 <input
    //                 readOnly
    //                 type="email"
    //                       name="orgname"
    //                       id="orgname"
    //                       placeholder={this.state.wallet.orgName}
    //                       className="form-control border-0"
    //                       style={{background: '#ffffff'}}
    //                       />
    //                     </div>
                        
    //                     </div>
    //                     </form>
    //                     </div>
                    
    //                   }
    //               </CardBody>
    //               </Card>
    //               </div>
    //               </div>
    //               <Footer />
    //               </div>
          );
  }
}

export default connect((store)=>({
  path:store.walletPath
}),{

})(Profile);

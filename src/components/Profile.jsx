import React, { Component } from "react";
import Sidenav from "../container/SideNav";
// import { showProfile } from "../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import { Card, CardTitle, CardBody } from "reactstrap";

class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      emailID:"",
      wallet:{
        orgName:"",
        org_aff:"",
        usr_id:"",
      }
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
      let localStorageData=localStorage.wallet.split(",");
      const usrid=localStorageData[0];
      const orgName=localStorageData[1];
      const orgAff=localStorageData[2]; 
      const email=localStorageData[3];
      // console.log(email);
      this.setState({emailID:email});
      let wallet={};
      wallet["usr_id"]=usrid;
      wallet["orgName"]=orgName;
      wallet["org_aff"]=orgAff;
      this.setState({wallet:wallet});

}
  loadData(user) {
    this.setState({ data: user });
  }
  handleSubmit(event) {
    event.preventDefault();
   
  }

  editform() {
    var form = document.getElementById("form");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = !elements[i].readOnly;
    }
    var cancelButton = document.getElementById("cancelBtn");
    cancelButton.disabled=!cancelButton.disabled;

    var editButton = document.getElementById("editButton");
    editButton.classList.toggle("btn-danger");
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Cancel" : "Edit";
  }

  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-sm-2 sidenav">
            <Sidenav activeComponent="1" />
          </div>
          <div className="col-sm-10">
            <div className="container-fluid mt-2">
              <h4 style={{color:'#FFFFFF'}}> <u> Profile</u></h4>
              <Card style={{boxShadow:'7px 7px rgb(167,167,167'}}>
              <CardBody>
              <CardTitle className="card-header">
              <div className="text-muted" >
                <h6> Username: {this.state.wallet.usr_id} </h6>
              </div>
              </CardTitle>
             
              {
                <div>   
                <form id="form" onSubmit={this.handleSubmit}>
                {/* <div className="alert alert-info">
               Click <strong>Edit</strong> to fill in the details and{" "}
              <strong>Update</strong> the information :
                  </div>
                  <hr />*/}
                  <div className="container-fluid">
                  
                    <div className="form-row my-2">
                    <div className="col-sm-6">
                    Username:
                    <input
                    readOnly
                      type="text"
                      name="username"
                      id="username"
                      placeholder={this.state.wallet.usr_id}
                      className="form-control border-0"
                      style={{background: '#ffffff'}}
                    />
                    </div>  
                    <div className="col-sm-6">
                    Email Id:
                    <input
                          readOnly
                          type="email"
                          name="emailId"
                          id="emailId"
                          placeholder={this.state.emailID}
                          className="form-control border-0"
                          style={{background: '#ffffff'}}
                        />
                        </div>

                        </div>
                  </div>
                 {/* <hr />
                 <div className="text-right">
                    <button
                      type="button"
                      id="editButton"
                      className="btn btn-secondary"
                      onClick={this.editform}
                      >
                      Edit
                      </button>
                    <button className="btn btn-light mx-2" type="reset">
                    Reset
                    </button>
                    <button type="submit" className="btn btn-primary" id="cancelBtn" disabled>
                    Update Profile
                    </button>
                    </div> */} 
                    </form>
                    <hr/>
                    <h5 >Wallet Details</h5>
                    <form>
                    <div className="form-row my-2" >
                    <div className="col-sm-6">
                    Affiliation:
                    <input
                    readOnly
                      type="text"
                      name="affiliation"
                      id="affiliation"
                      placeholder={this.state.wallet.org_aff}
                      className="form-control border-0"
                      style={{background: '#ffffff'}}
                    />
                    </div>  
                    <div className="col-sm-6">
                   Organisation Name:
                    <input
                          readOnly
                          type="email"
                          name="orgname"
                          id="orgname"
                          placeholder={this.state.wallet.orgName}
                          className="form-control border-0"
                          style={{background: '#ffffff'}}
                        />
                        </div>

                        </div>
                    </form>
                    </div>
                    
                  }
                  </CardBody>
                  </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store)=>({
  path:store.walletPath
}),{

})(Profile);

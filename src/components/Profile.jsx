import React, { Component } from "react";
import Sidenav from "../container/SideNav";
// import { showProfile } from "../store/actions";

class Profile extends Component {
  state = {
    isLoading: true,
    data: {
      _id: null,
      affiliation:'xyhsb',
      emailId: "srush@gmail.com",
      username: "srush",
    },
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
   
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
              <h4 style={{color:'#FFFFFF'}}>Profile</h4>
              <div className="text-muted" >
                <h6 style={{color:'#FFFFFF'}}> Username: {this.state.data.username} </h6>
              </div>
              <hr />
              {
                <form id="form" onSubmit={this.handleSubmit}>
                  <div className="alert alert-info">
                    Click <strong>Edit</strong> to fill in the details and{" "}
                    <strong>Update</strong> the information :
                  </div>
                  <hr />
                  <div className="container-fluid">
                    
                    <div className="form-row my-2"  style={{color:'#FFFFFF'}}>
                    <div className="col-sm-6">
                    Affiliation:
                    <input
                      readOnly
                      type="text"
                      name="affiliation"
                      id="affiliation"
                      placeholder={this.state.data.affiliation}
                      className="form-control"
                    />
                  </div>  
                    <div className="col-sm-6">
                        Email Id:
                        <input
                          readOnly
                          type="email"
                          name="emailId"
                          id="emailId"
                          placeholder={this.state.data.emailId}
                          className="form-control"
                        />
                      </div>

                    </div>
                  </div>
                  <hr />
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
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

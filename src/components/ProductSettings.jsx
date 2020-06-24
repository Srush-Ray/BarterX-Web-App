import React, { Component, useState } from "react";
import { Card, CardTitle, Button, CardBody, CardText } from "reactstrap";
import Sidenav from "../container/SideNav";

class ProductSettings extends Component {
  state = {
    isLoading: true,
    showMessage: true,
      products: {         
        productId	:"1",
        name:	"xyz",
        timestamp:	"24-06-2020",
        category	:"abc",
        status	:"Y",
        ownerName	:"trial",
        ownerId	:"123654",
        productDescription:"poduct1"
          
        },
  };
  constructor(props) {
    super(props);
    this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  componentWillUnmount() {
    
  }
  handleSubmitUpdate(event){
    event.preventDefault();
  
    var cancelButton = document.getElementById("cancelBtn");
    cancelButton.disabled=!cancelButton.disabled;
    var deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.disabled=!cancelButton.disabled;

    
    var editButton = document.getElementById("editButton");
    editButton.classList.toggle("btn-danger");
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Cancel" : "Edit";
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    const id= formData.get("pid") || null;
    console.log(id);
  }
  
  handleClick(username) {
    if (
      window.confirm("Are you sure you want to delete this product ?")
    ) {
            alert("deleted")
    }
  }
  async componentDidMount() {
   
  }
  loadData(user) {
    this.setState({ data: user });
  }

  editform() {
    var form = document.getElementById("form1");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = !elements[i].readOnly;
    }
    var cancelButton = document.getElementById("cancelBtn");
    cancelButton.disabled=!cancelButton.disabled;
    var deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.disabled=!cancelButton.disabled;

    
    var editButton = document.getElementById("editButton");
    editButton.classList.toggle("btn-danger");
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Cancel" : "Edit";
  }

  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-sm-2 sidenav">
            <Sidenav activeComponent="3" />
          </div>
          <div className="col-sm-10">
            <div className="container-fluid mt-2">
              <h4  style={{color:'#FFFFFF'}}>Delete Product</h4>
              <hr />
              {
                <div  style={{color:'#FFFFFF'}}>
                  Enter product Id to delete :
                  <form id="form" onSubmit={this.handleSubmit}>
                    <div className="form-row my-2">
                      <div className="col-sm-6">
                        <input
                          required
                          type="text"
                          name="pid"
                          id="pid"
                          placeholder="Product Id"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-6">
                        <button
                          type="submit"
                          className="btn btn-dark btn-sm mx-2"
                          //   onClick={this._showMessage(true,this.state.username)}
                        >
                          Get Information
                        </button>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div>
                    {this.state.showMessage && (
                      <div>
                      <form id="form1" onSubmit={this.handleSubmitUpdate}>
                      <div className="alert alert-info">
                      Click <strong>Edit</strong> to fill in the details and{" "}
                      <strong>Update</strong> the information :
                    </div>
                    <hr />
                      <Card>
                      <CardBody>
                        <CardTitle>
                          {/*<h4>{this.state.products.name}</h4>*/}
                          <small className="text-muted">
                            {this.state.products.productId}
                          </small>
                        </CardTitle>
                        <hr />
                        <table className="table-borderless table-hover table-sm" style={{color:'black',width:'auto'}}>
                          <tbody>
                          <tr>
                          <td>Name</td>
                          <td>
                          <input
                          readOnly
                          type="text"
                          name="name"
                          id="name"
                          placeholder={this.state.products.name}
                          className="form-control border-0"
                          style={{background: '#ffffff'}}
                        />
                          </td>
                        </tr>

                            <tr>
                              <td>Timestamp</td>
                              <td>
                              <input
                              readOnly
                              type="text"
                              name="timestamp"
                              id="timestamp"
                              placeholder={this.state.products.timestamp}
                              className="form-control border-0"
                              style={{background: '#ffffff'}}
                            />
                              </td>
                            </tr>

                            <tr>
                              <td>Category</td>
                              <td>
                              <input
                              readOnly
                              type="text"
                              name="category"
                              id="category"
                              placeholder={this.state.products.category}
                              className="form-control border-0"
                              style={{background: '#ffffff'}}
                            />
                              </td>
                            </tr>

                            <tr>
                              <td>Status</td>
                              <input
                                readOnly
                                type="text"
                                name="status"
                                id="status"
                                placeholder={this.state.products.status}
                                className="form-control border-0"
                              style={{background: '#ffffff'}}
                              />
                            </tr>

                            <tr>
                              <td>Owner Id</td>
                              <input
                            readOnly
                            type="text"
                            name="ownerid"
                            id="ownerid"
                            placeholder={this.state.products.ownerId}
                            className="form-control border-0"
                              style={{background: '#ffffff'}}
                          />
                            </tr>

                            <tr>
                              <td>Owner Name</td>
                              <input
                              readOnly
                              type="text"
                              name="ownername"
                              id="ownername"
                              placeholder={this.state.products.ownerName}
                              className="form-control border-0"
                              style={{background: '#ffffff'}}
                            />
                            </tr>
                            <tr>
                            <td>Product Description</td>
                            <td>
                            <input
                            readOnly
                            type="text"
                            name="productdescription"
                            id="productdescription"
                            placeholder={this.state.products.productDescription}
                            className="form-control border-0"
                              style={{background: '#ffffff'}}
                          /></td>
                            </tr>
                          </tbody>
                        </table>
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
                        <Button
                        className="btn btn-danger btn-sm mx-2"
                        id="deleteBtn"
                        onClick={() =>
                          this.handleClick(this.state.products._id)
                        }
                      >
                        Delete
                      </Button>
                      </div>
                      </CardBody>
                    </Card>
                    </form>

                      
                      </div>
                      
                    )}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSettings;
// <form id="form" onSubmit={this.handleSubmit}>
                       
// <div className="container-fluid">
  
//   <div className="form-row my-2"  style={{color:'#FFFFFF'}}>
//   <div className="col-sm-6">
//   Name:
//   <input
//     readOnly
//     type="text"
//     name="name"
//     id="name"
//     placeholder={this.state.products.name}
//     className="form-control"
//   />
// </div>  
//   <div className="col-sm-6">
//      Timestamp:
//       <input
//         readOnly
//         type="text"
//         name="timestamp"
//         id="timestamp"
//         placeholder={this.state.products.timestamp}
//         className="form-control"
//       />
//     </div>      
//   </div>

//   <div className="form-row my-2"  style={{color:'#FFFFFF'}}>
//   <div className="col-sm-6">
//   Category:
//   <input
//     readOnly
//     type="text"
//     name="category"
//     id="category"
//     placeholder={this.state.products.category}
//     className="form-control"
//   />
// </div>  
//   <div className="col-sm-6">
//      Status:
//       <input
//         readOnly
//         type="text"
//         name="status"
//         id="status"
//         placeholder={this.state.products.status}
//         className="form-control"
//       />
//     </div>      
//   </div>

//   <div className="form-row my-2"  style={{color:'#FFFFFF'}}>
//   <div className="col-sm-6">
//   Owner ID:
//   <input
//     readOnly
//     type="text"
//     name="ownerid"
//     id="ownerid"
//     placeholder={this.state.products.ownerId}
//     className="form-control"
//   />
// </div>  
//   <div className="col-sm-6">
//      Owner Name:
//       <input
//         readOnly
//         type="text"
//         name="ownername"
//         id="ownername"
//         placeholder={this.state.products.ownerName}
//         className="form-control"
//       />
//     </div>      
//   </div>
//   <div className="form-row my-2"  style={{color:'#FFFFFF'}}>
//   <div className="col-sm-">
//   Product Description:
//   <input
//     readOnly
//     type="text"
//     name="productdescription"
//     id="productdescription"
//     placeholder={this.state.products.productDescription}
//     className="form-control"
//   />
// </div>  
//   </div>
// </div>
// <hr />
// <div className="text-right">
//   <button
//     type="button"
//     id="editButton"
//     className="btn btn-secondary"
//     onClick={this.editform}
//   >
//     Edit
//   </button>
//   <button className="btn btn-light mx-2" type="reset">
//     Reset
//   </button>
//   <button type="submit" className="btn btn-primary" id="cancelBtn" disabled>
//     Update Profile
//   </button>
//   <Button
//   className="btn btn-danger btn-sm mx-2"
//   id="deleteBtn"
//   onClick={() =>
//     this.handleClick(this.state.products._id)
//   }
// >
//   Delete
// </Button>
// </div>
// </form>
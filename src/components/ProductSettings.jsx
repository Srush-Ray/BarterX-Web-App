import React, { Component, useState } from "react";
import { Card, CardTitle, Button, CardBody, CardText } from "reactstrap";
import Sidenav from "../container/SideNav";
import { readProduct,updateProduct,removeSuccess, removeError } from "../store/actions";
import { connect } from "react-redux";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

class ProductSettings extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      showMessage:false,
      emailID:"",
      pid:"",
      wallet:{
        orgName:"",
        org_aff:"",
        usr_id:"",
      },
        product:{
          id:"",
          Available:"",
          name:"",
          Owner:"",
          resource_type_id:"",
        },         
    };  
    this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
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
  handleSubmitUpdate(event){
    event.preventDefault();
    const {updateProduct}=this.props;
    var formData = new FormData(event.target);
    var cancelButton = document.getElementById("cancelBtn");
    cancelButton.disabled=!cancelButton.disabled;
    var deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.disabled=!cancelButton.disabled;

    
    var editButton = document.getElementById("editButton");
    editButton.classList.toggle("btn-danger");
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Cancel" : "Edit";


    let data={};

    data["productID"]= this.state.pid || null;
    data["name"]= formData.get("name") || this.state.product.name;
    data["category"]= formData.get("category") || this.state.product.category;
    data["status"]= formData.get("available") || this.state.product.Available;
    data["owner"]= formData.get("owner") || this.state.product.Owner;
    updateProduct("?user_id="+this.state.wallet.usr_id+"&orgName="+this.state.wallet.orgName,data);
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    const id= formData.get("pid") || null;
    const {readProduct}=this.props;
    if(id!=null){
      this.setState({pid:id});
    }
    readProduct("?user_id="+this.state.wallet.usr_id+"&orgName="+this.state.wallet.orgName+"&productID="+id)
    .then(
      () => 
      this.loadData(this.props.product));
  }
  
  handleClick(username) {
    if (
      window.confirm("Are you sure you want to delete this product ?")
    ) {
      alert("deleted")
    }
  }

  loadData(productD) {
    console.log(productD);
    let obj=JSON.parse(productD);
    console.log(obj);
    this.setState({product:obj});
    // let product={}
   
//     let productDetails=productD.split(",");
//     let available=productDetails[0].split(":")
//     let Owner=productDetails[1].split(":")
//     let id=productDetails[2].split(":")
//     let name=productDetails[3].split(":")
//     let resourceID=productDetails[4].split(":")
//     console.log(productD);
// //     var text = productD;
// // var obj = JSON.parse(text);
//     // let obj = JSON.parse(productD);
//     // console.log(obj);
//     // console.log(text);
//     product["Available"]=available[1].substring(1,available[1].length-1)
//     product["Owner"]=Owner[1].substring(1,Owner[1].length-1)
//     product["id"]=id[1].substring(1,id[1].length-1)
//     product["name"]=name[1].substring(1,name[1].length-1)
//     product["resource_type_id"]=resourceID[1].substring(1,resourceID[1].length-2)
//     this.setState({product:product})
    this.setState({showMessage:true})
    console.log(this.state);
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
  componentWillUnmount() {
    const { removeSuccess,removeError } = this.props;
    removeSuccess();
    removeError()
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
              <h4  style={{color:'#FFFFFF'}}>Delete/Update Product</h4>
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
                        <CardTitle className="card-header">
                          {/*<h4>{this.state.products.name}</h4>*/}
                          <small  className="text-muted">
                            {this.state.product.id}
                          </small>
                        </CardTitle>
                       
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
                              placeholder={this.state.product.name}
                              className="form-control border-0"
                              style={{background: '#ffffff'}}
                            />
                          </td>
                        </tr>

                            <tr>
                              <td>Availability</td>
                              <td>
                                  <input
                                  readOnly
                                  type="text"
                                  name="available"
                                  id="available"
                                  placeholder={this.state.product.Available}
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
                                  placeholder={this.state.product.resource_type_id}
                                  className="form-control border-0"
                                  style={{background: '#ffffff'}}
                                />
                              </td>
                            </tr>

                            <tr>
                              <td>Owner</td>
                             <td> <input
                            readOnly
                            type="text"
                            name="owner"
                            id="owner"
                            placeholder={this.state.product.Owner}
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
              <span>
                <ErrorMessage />
                <SuccessMessage />
               </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect((store)=>({
  product:store.currentProduct
}),{
  removeSuccess,
  removeError,
  readProduct,
  updateProduct
})(ProductSettings);
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
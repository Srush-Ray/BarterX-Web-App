import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSuccess,addSuccess,storeProduct, removeError } from "../store/actions";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import Sidenav from "../container/SideNav";
import SideNavPage from "../container/SideNavPage";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        productID: "",
        name: "",
        category: "",
        status:false,
        owner:""
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    const {removeError, removeSuccess } = this.props;
    removeSuccess();
    removeError();
  }
  handleSubmit(event) {
    event.preventDefault();
    const { storeProduct } = this.props;
    var formData = new FormData(event.target);
    const data = {};
    let localStorageData=localStorage.wallet.split(",");
    const usrid=localStorageData[0];
    const orgName=localStorageData[1];
    const orgAff=localStorageData[2]; 
    const email=localStorageData[3];

    data["productID"] = formData.get("productid") || this.state.data.productid;
    data["name"] = formData.get("productname") || this.state.data.productname;
    data["category"] = formData.get("category") || this.state.data.category;
    data["status"] = formData.get("status") || this.state.data.status;
    data["owner"] = formData.get("owner") || this.state.data.owner;
    storeProduct("?user_id="+usrid+"&orgName="+orgName,data);

  }
  render() {
    return (
      <div>
      <div className="wrapper ">
      <SideNavPage activeComponent="6" />  
     
          <div className="container-fluid">
            <div className="container-fluid">
              <h4 className="mt-2" style={{color:'white'}}><u>Add New Product</u></h4>
              
              <hr />
              {
                <form id="form" onSubmit={this.handleSubmit} style={{color:'white'}}>
                  Fill in the details:
               
                  <hr />
                  <div className="container-fluid">
                    <div className="form-row my-2">
                      <div className="col-sm-6">
                        Product ID:
                        <input
                          required
                          type="text"
                          name="productid"
                          id="productid"
                          className="form-control"
                          placeholder="eg. 00X5A4"
                        />
                      </div>
                      <div className="col-sm-6">
                        Product Name:
                        <input
                          required
                          type="text"
                          name="productname"
                          id="productname"
                          placeholder="eg. Samsung"
                          className="form-control"
                        />
                      </div>
                    </div>
                   
                    <div className="form-row my-2">
                      <div className="col-sm-6">
                        Category:
                        <input
                          required
                          type="text"
                          name="category"
                          id="category"
                          placeholder="eg. Mobile"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-6">
                        Status:
                        <select
                        id="status"
                        name="status"
                        className="form-control"
                      >
                        <option value="true">
                          True
                        </option>
                        <option value="false">
                          False
                        </option>
                      </select>
                      </div>
                    </div>
                    <div className="form-row my-2">
                      <div className="col-sm-6">
                        Owner:
                        <input
                          required
                          type="text"
                          name="owner"
                          id="owner"
                          placeholder="eg. John"
                          className="form-control"
                        />
                      </div>
                      
                    </div>
                   
                  </div>
                  <hr />
                  <div className="text-right">
                    <button className="btn border-dark mx-2" type="reset">
                      Reset
                    </button>
                    <button type="submit" className="btn btn-dark">
                      Add Product
                    </button>
                  </div>
                </form>
              }
              <span className="mt-2" >
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

export default connect(
  (store) => ({
  }),
  { removeSuccess,storeProduct,addSuccess ,removeError}
)(AddProduct);

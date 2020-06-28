import React, { Component } from "react";
import Sidenav from "../container/SideNav";
import {
MdDelete,
MdFormatListBulleted,
MdViewAgenda,
} from "react-icons/md";
class ProductList extends Component {
  constructor(props) {
    super(props);
    //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      isLoading: true,
      products: [
        {
          productId	:"1",
          name:	"xyz",
          timestamp:	"24-06-2020",
          category	:"abc",
          status	:"Y",
          ownerName	:"trial",
          ownerId	:"123654",
          productDescription:"poduct1"	
          
        },
        {
         
          productId	:"2",
          name:	"xyz",
          timestamp:	"24-06-2020",
          category	:"abc",
          status	:"Y",
          ownerName	:"trial",
          ownerId	:"123654",
          productDescription:"poduct1"
          
        },{
           
          productId	:"3",
          name:	"xyz",
          timestamp:	"24-06-2020",
          category	:"abc",
          status	:"Y",
          ownerName	:"trial",
          ownerId	:"123654",
          productDescription:"poduct1"
            
          },
      ],
    };
   
  }

  async componentDidMount() {
   
  }
  loadData(productlist) {
    this.setState({ products: productlist });
  }
  handleListView() {
    let elements = document.getElementsByClassName("card-body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }
  handleCardView() {
    let elements = document.getElementsByClassName("card-body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }
  expandInline(e) {
      if( e.target.parentElement.lastChild.style.display === "block"){
        e.target.parentElement.lastChild.style.display = "none";
      }else{
        e.target.parentElement.lastChild.style.display = "block";
      }
    // e.target.parentElement.lastChild.style.display = "block";
  }
 
  renderCardData() {
    return this.state.products.map((product) => {
      const {
          productId	,
          name,
          timestamp,
          category,
          status	,
          ownerName	,
          ownerId	,
          productDescription
      } = product; //destructuring
      return (
        <div
          className="col-sm-6"
          key={productId}
        >
          <div className="card my-2">
            <div className="card-header" onClick={this.expandInline.bind(this)}>
             {productId}
              <span className="float-right">
              <span className="mx-1">
              
              </span>
              </span>
              <br />
              <small className="text-muted">Name: {name}</small>
            </div>
            <div className="card-body">
            <b> Timestamp : </b>{timestamp}<br />
            <b> Category : </b>{category}<br />
            <b> Status : </b>{status}<br />
            <b> Owner Name : </b>{ownerName}<br />
            <b> Owner ID : </b>{ownerId}<br />
            <b> Description : </b>{productDescription}<br />
            
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="row no-gutters">        
          <div className="col-sm-2 sidenav">
            <Sidenav activeComponent="2" />
          </div>
          <div className="col-sm-10 of">
            <div className="container-fluid">
              <h4 className="mt-2" style={{color:'#FFFFFF'}}>
               Product List
                <div className="float-right">
                  <div
                    className="btn-group btn-group-toggle btn-sm"
                    data-toggle="buttons"
                  >
                    <label
                      className="btn btn-secondary btn-sm"
                      onClick={this.handleListView}
                    >
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        autoComplete="off"
                      />
                      <MdFormatListBulleted color="white" />
                    </label>
                    <label
                      className="btn btn-secondary active btn-sm"
                      onClick={this.handleCardView}
                    >
                      <input
                        type="radio"
                        name="options"
                        id="option2"
                        autoComplete="off"
                      />
                      <MdViewAgenda color="white" />
                    </label>
                  </div>
                </div>
              </h4>
              <hr />
              <div class="row">{this.renderCardData()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;

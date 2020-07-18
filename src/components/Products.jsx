import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Modal, Button
  } from 'reactstrap';
import phone from "../components/images/phone.jpg";
import Footer from "../container/Footer";
import   { removeSuccess,getIndexed,addSuccess ,removeError} from "../store/actions"
import { connect } from "react-redux";
class Products extends Component {
  constructor(props) {
    super(props);
    //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      isLoading: false,
      products: [
      ],
    };
    this.handleClose=this.handleClose.bind(this);
   this.handleModel=this.handleModel.bind(this);
  }
  handleModel(event){
    this.setState({isLoading:true});
  }
  async componentDidMount() {
    let localStorageData=localStorage.wallet.split(",");
    const usrid=localStorageData[0];
    const orgName=localStorageData[1];
    const orgAff=localStorageData[2]; 
    const email=localStorageData[3];

    const { getIndexed }=this.props
    let data={};
    data["start_index"]="0";
    data["last_index"]="5";
    getIndexed("?user_id="+usrid+"&orgName="+orgName,data)
    .then(()=>{
      this.loadData(this.props.products)
    })
   
  }
  handleClose(event){
    this.setState({isLoading:false});
  }
  loadData(productlist) {
    this.setState({ products: productlist });
    console.log(productlist);
  }
  renderCardData() {
    console.log(this.state)
    return this.state.products.map((product) => {
      const {
          id,
          name,
          resource_type_id,
          Price
      } = product; //destructuring
      return (

        <div
          className="item col-md-2 col-sm-4 hover"
          key={id}
        >
          <Card style={{marginTop:"10%"}}>
                <CardBody>
                  <CardTitle><b>Product Name : </b>{name}</CardTitle>
                  <CardSubtitle><b>category : </b>{resource_type_id}</CardSubtitle>
                </CardBody>
               <CardImg src={phone} alt="" style={{height:"180px",padding:"20px"}} />
                <CardBody>
                  <CardText style={{color:"black"}}><b>Price : </b>{Price}</CardText>
                  <button  className="btn btn-primary mx-2" 
                  onClick={(event) => {
                    event.stopPropagation();
                    this.setState({isLoading: true});
                  }}
                  >BUY</button>
                  <button  className="btn btn-primary mx-2"><a href="/barter">Barter</a></button>
                </CardBody>
              </Card>
        </div>

      );
    });
  }
  render() {
    return (
      <div>
      <div className="container-fluid">
      <div className="row">{this.renderCardData()}</div>
      <Modal show={this.state.isLoading} onHide={this.handleClose}>
     xdrcfghjbk m
        <Button variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={this.handleClose}>
          Save Changes
        </Button>
    </Modal>
            </div>
            <Footer/>
          </div>
    );
  }
}

export default connect((store) => ({
  products:store.products,
  }),
  { removeSuccess,getIndexed,addSuccess ,removeError}
)(Products);

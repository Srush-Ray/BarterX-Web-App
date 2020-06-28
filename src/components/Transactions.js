import React, {Component} from 'react' 
import Sidenav from "../container/SideNav";
import Array1 from './Array1'
import {getTransactions} from "../store/actions/users";
import {connect} from "react-redux"; 
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

class Transactions extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            transactions: [  
                {       
                    id : "k55521d81p",
                    product: "Iphone X",
                    price: "Rs.20,000",
                    date: 24-6-2020,
                    ownerId: "p687hj22"
                },
                {
                    id : "l55521d81p",
                    product: "Iphone X",
                    price: "Rs.20,000",
                    date: 24-6-2020,
                    ownerId: "p687hj22"
                },
                {
                    id : "e55521d81p",
                    product: "Iphone X",
                    price: "Rs.20,000",
                    date: 24-6-2020,
                    ownerId: "p687hj22"
                },
                {
                    id : "y55521d81p",
                    product: "Iphone X",
                    price: "Rs.20,000",
                    date: 24-6-2020,
                    ownerId: "p687hj22"
                } 
            ]
        }
    }
    loadData(transaction) {
        // this.setState({transactions:transaction});
       
       }

    componentDidMount() {   
        const { getTransactions } = this.props;
        let localStorageData=localStorage.wallet.split(",");
        const usrid=localStorageData[0];
        const orgName=localStorageData[1];
        const orgAff=localStorageData[2]; 
        const email=localStorageData[3];
        // console.log(email);
        // this.setState({emailID:email});
        // let wallet={};
        // wallet["usr_id"]=usrid;
        // wallet["orgName"]=orgName;
        // wallet["org_aff"]=orgAff;

        // getTransactions("?user_id="+usrid+"&orgName="+orgName).then(() => this.loadData(this.props.pastTransaction));

    }
    expandInline(e) {
        if( e.target.parentElement.lastChild.style.display === "block"){
          e.target.parentElement.lastChild.style.display = "none";
        }else{
          e.target.parentElement.lastChild.style.display = "block";
        }
      // e.target.parentElement.lastChild.style.display = "block";
    }
    renderData(){
        if(this.state.transactions!==undefined){
            const arr = this.state.transactions.map( (order, index) => {
        
                return <Array1 key={order.id}
                         id={order.id}
                         product={order.product}
                         price={order.price}
                         date={order.date}
                         ownerid={order.ownerId}
                    />
            
            } )
        }else{
            return( 
                <span>
                <ErrorMessage />
               </span>);
        }
        return this.state.transactions.map((transaction) => {
            const {
                id	,
                product,
                price,
                date,
                ownerId,
            } = transaction; //destructuring
            return (
              <div
                className="col-sm-6"
                key={id}
              >
                <div className="card my-2">
                  <div className="card-header"onClick={this.expandInline.bind(this)} >
                   {id}
                    <span className="float-right">
                    <span className="mx-1">
                    
                    </span> 
                    </span>
                    <br />
                    <small className="text-muted">Name: {product}</small>
                  </div>
                  <div className="card-body" style={{display:'none'}}>
                  <b> Price : </b>{price}<br />
                  <b> Date : </b>{date}<br />
                  <b> Owner ID : </b>{ownerId}<br />
                 
                  </div>
                </div>
              </div>
            );
          });
    }
    render() {
        // const arr = this.state.transactions.map( (order, index) => {
	
        //     return <Array1 key={order.id}
        //              id={order.id}
        //              product={order.product}
        //              price={order.price}
        //              date={order.date}
        //              ownerid={order.ownerId}
        //         />
        
        // } )
        return (

            <div>
                <div className="row no-gutters">
                <div className="col-sm-2 sidenav">
                    <Sidenav activeComponent="5" />
                </div>
              
                <div className="col-sm-10">
                <h3 style={{color:'white', marginLeft:'45%', marginTop:'3%'}}>Previous Transactions :</h3>
               
                <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
                <div className="container" style={{ height:'auto', width:'auto' }}>
                <div class="row">
                {this.renderData()}
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
    



export default connect((store)=>({
    transactions:store.pastTransaction,
}),{
    getTransactions
})(Transactions);
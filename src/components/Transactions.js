import React, {Component} from 'react' 
import Sidenav from "../container/SideNav";
import Array1 from './Array1'

import {getTransactions,removeSuccess} from "../store/actions";
import {connect} from "react-redux"; 
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import SideNavPage from '../container/SideNavPage';

class Transactions extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            transactions: [
               
            ],
            username:"",
        }
    }
    loadData(transaction) {
        this.setState({transactions:transaction.txids});
        this.setState({username:transaction.username});

    //    console.log(transaction)
       }
       componentWillUnmount() {
        const { removeSuccess } = this.props;
        removeSuccess();
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

        getTransactions("?user_id="+usrid+"&orgName="+orgName).then(() => this.loadData(this.props.transactions));

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
          return this.state.transactions.map((product) => {
             //destructuring
            return (
              <div
                className="col-sm-12"
                key={product}
              >
                <div className="card" style={{margin:'5px'}}>
                  <div className="card-header" onClick={this.expandInline.bind(this)}>
                   {product}
                  </div>
                </div>
              </div>
            );
          });
        }else{
            return( 
                <span>
                <ErrorMessage />
               </span>);
        }
    }
    render() {
       
        return (

            <div className="wrapper ">
             <SideNavPage activeComponent="5" />  
            <div className="container-fluid">
                <h3 style={{color:'white', marginLeft:'40%', marginTop:'3%'}}>Previous Transactions :</h3>
               <hr/>
                <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
                <div className="container" style={{ height:'auto', width:'auto' }}>
                <h3 style={{color:'white', marginLeft:'40%', marginTop:'3%'}}>Username :{this.state.username}</h3>
                <div className="row">
                {this.renderData()}
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
    getTransactions,
    removeSuccess
})(Transactions);
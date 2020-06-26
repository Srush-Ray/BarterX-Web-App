import React, {Component} from 'react' 
import Sidenav from "../container/SideNav";
import Array1 from './Array1'


class Transactions extends Component {
    
    constructor(){
        super();
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


    componentDidMount() {   
    
    }
    
    render() {
        
        const arr = this.state.transactions.map( (order, index) => {
	
            return <Array1 
                     id={order.id}
                     product={order.product}
                     price={order.price}
                     date={order.date}
                     ownerid={order.ownerId}
                />
        
        } )
        
        return (

            <div>
                <div className="row no-gutters">
                <div className="col-sm-2 sidenav">
                    <Sidenav activeComponent="4" />
                </div>
                <div className="col-sm-10">
                <h3 style={{color:'white', marginLeft:'45%', marginTop:'3%'}}>Previous Transactions :</h3>
                <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
                <div className="container" style={{ height:'auto', width:'auto' }}>
                    
                        {arr}  
                    
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
    



export default Transactions;
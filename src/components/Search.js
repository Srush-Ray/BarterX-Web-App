import React, { Component } from "react";
import Sidenav from "../container/SideNav";
import Array from './Array'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            products: [  
                {       
                productId	:"1",
                name:	"Iphone X",
                timestamp:	"24-06-2020",
                category	:"Mobile",
                status	:"Y",
                ownerName	:"trial",
                ownerId	:"123654",
                productDescription:"poduct1"
                },
                {
                productId	:"2",
                name:	"Samsung A50",
                timestamp:	"24-06-2020",
                category	:"Mobile",
                status	:"Y",
                ownerName	:"trial",
                ownerId	:"223654",
                productDescription:"poduct2"
                },
                {
                productId	:"3",
                name:	"Redmi Note 9 Pro",
                timestamp:	"24-06-2020",
                category	:"Mobile",
                status	:"Y",
                ownerName	:"trial",
                ownerId	:"323654",
                productDescription:"poduct3"
                },
                {
                productId	:"4",
                name:	"DSLR",
                timestamp:	"24-06-2020",
                category	:"Camera",
                status	:"Y",
                ownerName	:"trial",
                ownerId	:"323654",
                productDescription:"poduct3"
                } 
            ]
        };
    }

    UpdateSearch(event) {
        this.setState({search: event.target.value.substr(0,10)});
    }

    render() {
        let filtered = this.state.products.filter(
            (product) => {
                return product.name.indexOf(this.state.search) !== -1;
            }
        );

        const arr = filtered.map((product, index) => {
            return < Array
            name= {product.name}
            category = {product.category}
            // status = {product.status}
            // productDescription = {product.productDescription} 
            />
        })
        return (
            <div>
                <div className="row no-gutters">
                <div className="col-sm-2 sidenav">
                    <Sidenav activeComponent="4" />
                </div>
                <div className="col-sm-10">
                {/* <input type="text" value={this.state.search} onChange={this.UpdateSearch.bind(this)} /> */}
                <input type="text" value={this.state.search} onChange={this.UpdateSearch.bind(this)} placeholder="Enter Product Name.." style={{width:'30%', height:'6%', borderRadius:'10px', marginLeft:'35%',marginRight:'35%', marginTop:'2%', padding:'1% 1%'}}/>             
                <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
                <div className="container" style={{ height:'auto', width:'auto' }}>
                    <div className="row" style={{marginTop:'3%', height:'auto', width:'auto'}}>
                    {arr} 
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Search;

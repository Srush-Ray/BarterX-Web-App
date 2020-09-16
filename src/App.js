import React from "react";
import { store } from "./store";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Transactions from "./components/Transactions";
import AddProduct from "./components/AddProduct";
import HomePage from "./components/HomePage";
import MyProductList from "./components/MyProducts";
import ProductSetting from "./components/ProductSetting";
import CategorySearch from "./components/CategorySearch";
import Barter from "./components/Barter";
import { BuyTokens } from "./components/buyTokens";
import NotFoundPage from "./components/NotFound";
import Terms from "./components/Terms";
import Chat from "./components/Chat";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/home" component={HomePage} />
          <Route path="/search" component={Search} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/profile" component={Profile} />
          <Route path="/myproducts" component={ProductSetting} />
          <Route path="/category" component={CategorySearch} />
          <Route path="/barter" component={Barter} />
          <Route path="/buytokens" component={BuyTokens} />
          <Route path="/terms" component={Terms}></Route>
          {/* <Route path="/chat" component={Chat}></Route>*/}

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

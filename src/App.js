import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from './components/AllProducts';
import Profile from './components/Profile';
import ProductSettings from './components/ProductSettings';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/products" component={ProductList} />
        <Route path="/home" component={Profile} />
        <Route path="/productSettings" component={ProductSettings} />

      </Switch>
    </Router>
  );
}

export default App;
